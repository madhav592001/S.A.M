const nodemailer = require('nodemailer');
const Hospital = require('../models/hospitalSchema');
const HospitalVerification = require('../models/hosVerSchema');
require('dotenv').config();

exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  Hospital.findOne({ email }).exec((err, user) => {
    if (user) {
      return res
        .status(400)
        .json({ error: 'Hospital with this email already exists' });
    }

    let newHospital = new Hospital({ name, email, password });

    newHospital.save((err, success) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      sendOtpVerificationemail(success, res);
    });
  });
};

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready for Verification');
  }
});

const sendOtpVerificationemail = async ({ _id, email }, res) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
    const mailOption = {
      From: process.env.AUTH_EMAIL,
      to: email,
      subject: 'Verify your email',
      html: `<p>Enter <b>${otp}</b> in the app to verify your email address and complete the signup process</p>
      <p>This will expire in <b>1 hour</b></p>`,
    };

    const newHospitalVerification = await new HospitalVerification({
      userId: _id,
      otp: otp,
      expiresAt: Date.now() + 3600000,
    });

    await newHospitalVerification.save();

    await transporter.sendMail(mailOption);

    return res.status(200).json({
      message: 'Verification OTP sent to email',
      data: {
        userId: _id,
        email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      return res.status(400).json({ message: 'Provide valid details' });
    } else {
      const hospital = await HospitalVerification.find({
        userId,
      });
      if (hospital.length <= 0) {
        return res
          .status(400)
          .json({ message: 'No Hospitals found! signup first' });
      } else {
        const { expiresAt } = hospital[0];
        if (expiresAt < Date.now()) {
          await HospitalVerification.deleteMany({ userId });
          return res.status(400).json({ message: 'Code has expired' });
        } else {
          const validotp = await hospital[0].compareOtp(otp);

          if (!validotp) {
            return res.status(400).json({ message: 'Wrong Otp!' });
          } else {
            await Hospital.updateOne({ _id: userId }, { verified: true });
            await HospitalVerification.deleteMany({ userId });
            return res.status(200).json({
              message: 'Email Verified',
            });
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.resendOtp = async(req,res) => {
    try {
        let {userId,email} = req.body ;
        if (!userId || !email) {
            return res.status(400).json({ message: 'Provide valid details' });
        }else{
            await HospitalVerification.deleteMany({userId}) ; 
            sendOtpVerificationemail({_id:userId,email},res) ;
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const mongoose = require('mongoose');
const bcrypt = require("bcrypt") ;

const hospitalVerificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    hashOtp: {
      type: String,
    },
    expiresAt:{
        type:Date
    }
  },
  {
    timestamps: true,
  }
);

hospitalVerificationSchema.virtual('otp').set(function (otp) {
  this.hashOtp = bcrypt.hashSync(otp, 10);
});

hospitalVerificationSchema.methods = {
  compareOtp: function (otp) {
    return bcrypt.compareSync(otp, this.hashOtp);
  },
};

const HospitalVerification = mongoose.model(
  'hospitalVerification',
  hospitalVerificationSchema
);

module.exports = HospitalVerification;

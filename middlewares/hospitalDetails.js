const Hospital = require('../models/hospitalSchema');

//todo TAKE AND UPDATE DETAILS
exports.takeDetails = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(210).json({
      error: 'Provide valid hospital id',
    });
  } else {
    try {
      const hospital = await Hospital.findById(userId);
      if (!hospital) {
        return res.status(200).json({
          error: 'No hospital exist',
        });
      } else {
        const updatedHospital = await Hospital.findByIdAndUpdate(
          userId,
          {
            $set: req.body,
          },
          { new: true }
        );

        return res.status(200).json({
          message: 'Hospital details updated',
          updatedHospital,
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};

//todo GET HOSPITAL BY ID
exports.getDetailsById = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(210).json({
      error: 'Provide valid hospital id',
    });
  } else {
    try {
      const hospital = await Hospital.findById(userId);
      if (!hospital) {
        return res.status(200).json({
          error: 'No hospital exist',
        });
      } else {
        return res.status(200).json(hospital);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
};

//todo GET ALL THE HOSPITAL DETAILS
exports.getAllHospitals = async (req, res) => {
  if (req.query.length > 0) {
    console.log(req.query);

    try {
      const hospitals = await Hospital.find({
        name: req.query.name,
        city: req.query.city,
      });
      if (hospitals.length <= 0) {
        return res.status(420).json({ message: 'No Hospitals found' });
      } else {
        return res.status(200).json(hospitals);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server error!' });
    }
  } else {
    try {
      const hospitals = await Hospital.find();
      if (hospitals.length <= 0) {
        return res.status(200).json({ message: 'No Hospitals found' });
      } else {
        return res.status(200).json(hospitals);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

//TODO ADD DOCTORS IN A HOSPITAL
exports.addDoctors = async (req, res) => {
  const userId = req.params.userId;

  const doctors = req.body.doctors;

  try {
    const updated = await Hospital.findByIdAndUpdate(
      { _id: userId },
      { $push: { doctors: doctors } }
    );
    return res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

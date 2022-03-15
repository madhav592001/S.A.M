const Hospital = require('../models/hospitalSchema');

exports.takeDetails = async (req, res) => {
  if (!userId) {
    return res.status(400).json({
      error: 'Provide valid hospital id',
    });
  } else {
    try {
      const hospital = await Hospital.findById(userId);
      if (!hospital) {
        return res.status(400).json({
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
          updatedHospital
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
};

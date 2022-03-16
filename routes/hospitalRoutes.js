const router = require('express').Router();
const {
  takeDetails,
  getDetailsById,
  getAllHospitals,
  addDoctors,
} = require('../middlewares/hospitalDetails');
const {
  signup,
  verifyOtp,
  resendOtp,
  signin,
} = require('../middlewares/hospitalSignup');

router.post('/signup', signup);
router.post('/verifyotp', verifyOtp);
router.post('/resendotp', resendOtp);
router.post('/signin', signin);

router.get('/:userId', getDetailsById);
router.put('/:userId', takeDetails);
router.put('/adddoctor/:userId', addDoctors);

router.get('/', getAllHospitals);

module.exports = router;

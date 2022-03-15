const router = require('express').Router();
const { takeDetails } = require('../middlewares/hospitalDetails');
const {
  signup,
  verifyOtp,
  resendOtp,
  signin
} = require('../middlewares/hospitalSignup');

router.post('/signup', signup);
router.post('/verifyotp', verifyOtp);
router.post('/resendotp', resendOtp);
router.post("/signin",signin) ; 
router.post("/details",takeDetails) ; 

module.exports = router;

const router = require('express').Router();
const { signup } = require('../middlewares/hospitalSignup');
const {verifyOtp,resendOtp} = require("../middlewares/hospitalSignup")

router.post("/signup",signup) ; 
router.post("/verifyotp",verifyOtp) ;
router.post("/resendotp",resendOtp) ; 

module.exports = router;
 
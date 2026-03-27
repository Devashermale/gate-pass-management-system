const otpmodel = require('../model/otpmodel')
const otpgenetator = require('otp-generator')
const sendotp = require('../utils/mailer');
const { models } = require('mongoose');


const otpsend = async (req,res) => {
    try {
    const { email } = req.body;

    const otp = otpgenetator.generate(6, { 
      upperCaseAlphabets: false, 
      specialChars: false, 
      lowerCaseAlphabets: false 
    });

    await otpmodel.create({ email, otp });

    await sendotp(email, otp);

    res.status(200).json({ success: true, message: "OTP sent to your email!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email delivery failed." });
  }
}

const verifyotp = async (req ,res) => {
     const {email, otp} = req.body
    try {
        const otprecords = await otpmodel.findOne({email,otp})


        if (!otprecords) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid OTP or the code has expired." 
      });
    }

    await otpmodel.deleteOne({ _id: otprecords._id });


    res.status(200).json({ 
      success: true, 
      message: "OTP verified successfully! You are now logged in." 
    });

  } catch (error) {
    res.status(500).json({ 
        success: false, 
        message: "Server error during verification."
     });
  }
   
}

module.exports = {
    otpsend,
    verifyotp
}
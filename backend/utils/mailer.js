const nodemailer = require('nodemailer')

const sendotpmail =  async (email,otp) => {
    const trasporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"devislive722@gmail.com",
            pass:"adcu impd wjvp mdkh",
        }
    })



    const mailoptions = {
        from:"OTP security verify  vmps@gmail.com",
        to:email,
        subject:"your verification code",
        html:
        `
        <div style="font-family: Arial, sans-serif; text-align: center;">
        <h2>Verify Your Account</h2>
        <p>Your one-time password (OTP) is:</p>
        <h1 style="color: #4A90E2;">${otp}</h1>
        <p>This code will expire in 5 minutes.</p>
      </div>
        `
    }
    return trasporter.sendMail(mailoptions)
}
module.exports =sendotpmail
const mongoose =require('mongoose')

const otpschema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
       type:String
    },
    createdAt: { type: Date,
         expires: '1m', 
         default: Date.now }
})

const otpdata = mongoose.model('otp',otpschema)
module.exports = otpdata
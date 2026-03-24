const mongoose = require('mongoose')

const visitorpass = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    visitpurpose: {
        type: String,
        required: true
    },
    empname: {
        type: String,
        required: true
    },
    visitdate: {
        type: Date,
        customDate: Date,
        required:true
    },
   
    path: {
        type: String,
        required: true
    },
    status:{
        type:String,
        default:"pending",
        required:true
    }
}
,{
    Timestamps: true
})

const pass = mongoose.model('visitorpass', visitorpass)
module.exports = pass
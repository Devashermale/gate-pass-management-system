const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt = require('bcrypt')
const empschema = mongoose.Schema({
email:{
    type:String,
    required:true,
    
},
password:{
type:String,
required:true
},
role:{
    type:String,
    default:"employee"
}
},{
    timestamps:true
})

const emp = mongoose.model('employees',empschema)

module.exports = emp
const mongoose = require('mongoose')

const empschema = mongoose.Schema({
email:{
    type:String,
    required:true
},
password:{
type:String,
required:true
}
},{
    Timestamps:true
})
const emp = mongoose.model('employee',empschema)

module.exports = emp
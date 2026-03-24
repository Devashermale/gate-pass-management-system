const mongoose = require('mongoose')

const Empschema = mongoose.Schema({
    empname:{
        type:String,
        required:true
    },
    empdept:{
    type:String,
    required:true
    },
    email:{
      type:String,
    required:true
    },
    
    Designation:{
  type:String,
  required:true
    },
    joiningdate:{
      type: Date,
  customDate: Date,
  required:true
}, 
path:{
 type:String,
 required:true
}
},{
  Timestamps:true
})

const Empdata = mongoose.model('Employeedata',Empschema)
module.exports =Empdata
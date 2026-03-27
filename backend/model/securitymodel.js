const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt = require('bcrypt')
const securityschema = mongoose.Schema({
    email:{
        type:String, 
        required:true
    },
      password:{
        type:String, 
        required:true
    },
    role:{
        type:String,
        default:"security"
    }
},{
    Timestamps:true
})

securityschema.statics.signup = async function(email ,password) {
    const exists = await this.findone({email})
    if(!email || !password){
       throw Error('all fields are mandatory')
    }
    
    if(!validator.isEmail(email)){
     throw Error('email is not valid')
    }

if(!validator.isStrongPassword(password)){
    throw Error("password is not strong"); 
}

if(exists){
throw Error('email already exits')

}
const salt = await bcrypt.gensalt(8)
const hash = await bcrypt.hash(password,salt)
 const user = await this.create({email , password:hash})
return user
}

const securitydata = mongoose.model('security',securityschema)

module.exports = securitydata


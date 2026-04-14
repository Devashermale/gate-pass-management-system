const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt = require('bcrypt')
const adminSchema = mongoose.Schema({
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
        default:"admin"
    }
},{
    timestamps:true
})

adminSchema.statics.Signup = async function(email ,password) {
    const exists = await this.findOne({email})
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
 const user = await this.create({email , password:hash,role: 'admin'})
return user
}
const admin = mongoose.model('admin',adminSchema)

module.exports = admin
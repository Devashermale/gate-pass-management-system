const admin = require('../model/adminmodel')
const jwt = require('jsonwebtoken')
const createtoken = (_id) =>{
    return jwt.sign({_id},process.env.secret,{expiresIn:'3d'})
}

const postadmin = async (req ,res) => {
    const {email,role,password}=req.body
    try {
        const adminsignup = await admin.create({email,role,password})
                const token = createtoken(visitordata._id)

        res.status(201).json({
            _id: adminsignup._id,
            email: adminsignup.email,
            role: adminsignup.role ,
            token:adminsignup.token
        }) 
    } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
}
module.exports ={
postadmin

}
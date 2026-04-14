const jwt = require('jsonwebtoken')
const admin =require('../model/adminmodel')


const postadmin = async (req ,res) => {
    const {email,password}=req.body
    try {
const adminsignup = await admin.create({ email,  password });
const token = jwt.sign(
            { 
                id: adminsignup._id, 
                role: "admin" // Hardcode the string here for testing
            }, 
            process.env.SECRET, 
            { expiresIn: '3d' }
        );

        console.log("✅ Manual Token Check - Role is: admin");
console.log(token);
console.log("✅ Token created for:", adminsignup.email, "Role:", adminsignup.role);

        res.status(201).json({
            email: adminsignup.email,
            role: adminsignup.role ,
            token

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
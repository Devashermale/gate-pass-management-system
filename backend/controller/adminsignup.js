const admin = require('../model/adminmodel')

const postadmin = async (req ,res) => {
    const {email,password}=req.body
    try {
        const adminsignup = admin.create({email,password})
        res.status(201).json(adminsignup)   
    } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
}
module.exports ={
postadmin

}
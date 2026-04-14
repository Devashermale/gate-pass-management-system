const security = require('../model/securitymodel')
const jwt = require('jsonwebtoken')
const createtoken = (user) =>{
    return jwt.sign({id: user._id, role: user.role},process.env.secret,{expiresIn:'3d'})
}



const postsecurity = async (req,res) => {
    const {email,role, password} = req.body
    try {
        const securitydata =await security.create({email,role, password})
    const token = createtoken(securitydata._id)

        res.status(201).json({
            email:securitydata.email,
            role:securitydata.role,
            token
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {
    postsecurity
}
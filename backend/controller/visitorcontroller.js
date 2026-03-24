const visitor = require('../model/VisitorSchema')
const jwt = require('jsonwebtoken')
const createtoken = (_id) =>{
    return jwt.sign({_id},process.env.secret,{expiresIn:'3d'})
}

const registervisitor = async (req ,res) => {
    const {email,password} = req.body
        try {
        const visitordata = await visitor.create({name,email,password})
        const token = createtoken(visitordata._id)
        res.status(201).json({email , token})
    } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
    
}

const signupvisitor = async (req ,res) => {
    const {email,password} = req.body
        try {
        const visitordata = await visitor({email,password})
        visitordata.save()
const token = createtoken(visitordata._id)
        res.status(201).json({email , token})
        } catch (error) {
         res.status(500).json({
            error:error.message
        })
    }
    
}






module.exports = {
   registervisitor,
   signupvisitor
}
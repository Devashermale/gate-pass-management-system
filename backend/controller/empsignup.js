const emp = require("../model/empmodel");
const jwt = require('jsonwebtoken')
const createtoken = (_id) =>{
    return jwt.sign({_id},process.env.secret,{expiresIn:'3d'})
}


const postemp = async (req,res) => {
    const {email,role,password} = req.body
    try {
        const employeedata = await emp.create({email,role,password})
        const token = createtoken(employeedata._id)

         res.status(201).json({
            email: employeedata.email,
            role: employeedata.role,
            token
         })
    } catch (error) {
          res.status(500).json({
            error:error.message
        })
    }
}

module.exports =
 {
    postemp
}

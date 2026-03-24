const emp = require("../model/empmodel");


const postemp = async (req,res) => {
    const {email,password} = req.body
    try {
        const empdata = emp.create({email,password})
        res.status(201).json(empdata)
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

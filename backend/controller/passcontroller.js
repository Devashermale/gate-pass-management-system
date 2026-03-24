const pass = require("../model/passschema")
const multer = require('multer');

const passget =async (req,res) => {
    try{
    const passcontrol = await pass.find({})
    res.status(200).json(passcontrol)
    }catch(error){
      res.status(500).json({
        error:error.message
      })
    }
} 

const getpass = async (req ,res) => {
    const {id} = req.params
    try {
        const passcontrol = await pass.findById(id)
        res.status(200).json(passcontrol)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
    
}

const postpass = async (req, res) => {
    try {
        const { name, email, visitpurpose, empname, joiningdate } = req.body;

        const newpass = new pass({
            name,
            email,
            visitpurpose,
            empname,
            visitdate: joiningdate, 
            path: req.file ? req.file.path : null
        });

        await newpass.save();
        res.status(201).json(newpass);
    } catch (error) {
        console.error("SAVE ERROR:", error.message); 
        res.status(500).json({ error: error.message });
    }
}
const putpass = async (req,res) => {
    const {id} = req.params
    try {
        const passcontrol = await pass.findByIdAndUpdate(id,req.body)
        res.status(200).json(passcontrol)
    } catch (error) {
          res.status(500).json({
            error:error.message
        })
    }
}
const Deletepass = async (req,res) => {
    const {id} = req.params
    try {
        const passcontrol = await  pass.findByIdAndDelete(id)
        res.status(200).json(passcontrol)
    } catch (error) {
          res.status(500).json({
            error:error.message
        })
    }
}
module.exports = {
    passget,
    getpass, 
    postpass,
    putpass,
    Deletepass
}
const multer = require('multer')
const Empdata = require('../model/Empdetailsmodel')

const Empdetailget =async (req,res) => {
    try{
    const Empdetail = await Empdata.find({})
    res.status(200).json(Empdetail)
    }catch(error){
      res.status(500).json({
        error:error.message
      })
    }
} 

const getEmpdetails = async (req,res) => {
    const {id} = req.params
    try{
    const Empdetail = await Empdata.findById(id)
    res.status(200).json(Empdetail)
    }catch(error){
      res.status(500).json({
        error:error.message
      })
    }
}
const postEmpdetails = async (req ,res) => {
    const {empname,empdept,email,Designation,joiningdate} = req.body
 
    const path = req.file ? req.file.path :null ;

    const emp = new Empdata({
      empname ,empdept, email, Designation,joiningdate,path
    })

    try {
        await emp.save()
        res.status(201).json(emp)
    } catch (error) {
          res.status(500).json({
        error:error.message
      })
    } 
}
const putEmpdetails = async (req ,res) => {
    const {id} = req.params
    try {
        const Empdetails = await Empdata.findByIdAndUpdate(id,req.body)
        res.status(200).json(Empdetails)
    } catch (error) {
          res.status(500).json({
        error:error.message
      })
    }
    
}
const deleteEmpdetails = async (req,res) => {
     const {id} = req.params
    try {
        const Empdetails = await  Empdata.findByIdAndDelete(id)
        res.status(200).json(Empdetails)
    } catch (error) {
          res.status(500).json({
        error:error.message
      })
    }
    
}
module.exports = {
    Empdetailget,
getEmpdetails,
postEmpdetails,
putEmpdetails,
deleteEmpdetails
}
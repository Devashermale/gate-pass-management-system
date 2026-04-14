
const express = require('express')
const multer = require('multer');
const { getEmpdetails, postEmpdetails, putEmpdetails, deleteEmpdetails, Empdetailget } = require('../controller/Empdatailscontroller')
const upload = require('../middleware/photo')
const protect = require('../middleware/requireauth')


const router = express.Router()

router.get('/empdata',Empdetailget)
router.get('/empdata/:id',getEmpdetails)
router.post('/empdata',upload.single('path'),postEmpdetails)
router.put('/empdata/:id',putEmpdetails)
router.delete('/empdata/:id',deleteEmpdetails)

module.exports = router
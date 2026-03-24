const express = require('express')
const multer = require('multer');
const { getpass, postpass, putpass, Deletepass, passget } = require('../controller/passcontroller')
const upload = require('../middleware/photo')

const router = express.Router()
router.get('/pass',passget)
router.get('/pass/:id',getpass)
router.post('/pass',upload.single('path'),postpass)
router.put('/pass/:id',putpass)
router.delete('/pass/:id',Deletepass)

module.exports = router
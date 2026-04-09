const express = require('express')
const { postadmin } = require('../controller/adminsignup')
const { protect } = require('../middleware/requireauth')    
const router = express.Router()

router.use(protect(['admin']))
router.post('/signup',postadmin)

module.exports =router
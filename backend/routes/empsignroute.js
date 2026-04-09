const express = require('express')
const { postemp } = require('../controller/empsignup')
const { protect } = require('../middleware/requireauth')    
const router = express.Router()

router.use(protect(['employee']))
router.post('/signup',postemp)


module.exports =router
const express = require('express')
const { postemp } = require('../controller/empsignup')
const router = express.Router()

router.post('/signup',postemp)


module.exports =router
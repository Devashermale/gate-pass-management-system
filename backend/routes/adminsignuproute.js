const express = require('express')
const { postadmin } = require('../controller/adminsignup')
const router = express.Router()

router.post('/signup',postadmin)

module.exports =router
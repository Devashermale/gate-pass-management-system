const express = require('express')
const { postemp } = require('../controller/empsignup')
const { protect } = require('../middleware/requireauth')    
const router = express.Router()

router.post('/signup',postemp)

router.get('/dashboard', protect(['employee']), (req, res) => {
    res.status(200).json({ message: "Access granted to employee Dashboard" });
});

module.exports =router
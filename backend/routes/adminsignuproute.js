const express = require('express')
const { postadmin } = require('../controller/adminsignup')
const { protect } = require('../middleware/requireauth')    
const router = express.Router()

router.post('/signup',postadmin)
router.get('/dashboard', protect(['admin']), (req, res) => {
    res.status(200).json({ message: "Access granted to Admin Dashboard" });
});

module.exports =router
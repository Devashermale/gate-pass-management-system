const express = require('express');
const { registervisitor, signupvisitor } = require('../controller/visitorcontroller');
const { protect } = require('../middleware/requireauth');
const router = express.Router()

router.post('/register',registervisitor)
router.post('/signup',signupvisitor)
router.get('/dashboard', protect(['visitor']), (req, res) => {
    res.status(200).json({ message: "Access granted to Admin Dashboard" });
});


module.exports = router
const express = require('express');
const { registervisitor, signupvisitor } = require('../controller/visitorcontroller');
const { protect } = require('../middleware/requireauth');
const router = express.Router()

router.use(protect(['visitor']))
router.post('/register',registervisitor)
router.post('/signup',signupvisitor)


module.exports = router
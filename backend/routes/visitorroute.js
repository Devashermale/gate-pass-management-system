const express = require('express');
const { registervisitor, signupvisitor } = require('../controller/visitorcontroller');

const router = express.Router()

router.post('/register',registervisitor)
router.post('/signup',signupvisitor)


module.exports = router
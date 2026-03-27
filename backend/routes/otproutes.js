
const express = require ('express')
const { otpsend, verifyotp } = require('../controller/otpcontroller')
router = express.Router()

router.post('/send', otpsend)
router.post('/verify',verifyotp)


module.exports = router 
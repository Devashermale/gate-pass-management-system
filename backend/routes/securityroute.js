  const express = require('express')
  const {postsecurity} = require('../controller/securitycontrol')
  const { protect } = require('../middleware/requireauth')    
   const router = express.Router()

router.use(protect(['employee']))
   router.post('/signup', postsecurity)


   module.exports = router

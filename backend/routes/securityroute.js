  const express = require('express')
  const {postsecurity} = require('../controller/securitycontrol')
   const router = express.Router()

   router.post('/signup', postsecurity)


   module.exports = router

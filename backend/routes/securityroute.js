  const express = require('express')
  const {postsecurity} = require('../controller/securitycontrol')
  const { protect } = require('../middleware/requireauth')    
   const router = express.Router()

   router.post('/signup', postsecurity)
   router.get('/dashboard', protect(['security']), (req, res) => {
       res.status(200).json({ message: "Access granted to Admin Dashboard" });
   });
   


   module.exports = router

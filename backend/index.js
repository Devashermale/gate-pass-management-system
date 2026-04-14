const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const adminroute = require('./routes/adminsignuproute')
const visitorroute = require('./routes/visitorroute')
const passroute = require('./routes/passroute')
const employeeroute = require('./routes/empsignroute')
const empdata = require('./routes/Empdetailroute')
const security = require('./routes/securityroute')
const otp = require('./routes/otproutes')
const app = express()

app.use(express.json())
app.use(cors(
    {
    allowedHeaders: ['Content-Type', 'Authorization']
    }
))
app.use(express.urlencoded({ extended: true }));
require('dotenv').config({ override: true });

app.use('/admin',adminroute)
app.use('/employees',employeeroute)
app.use('/user',visitorroute)
app.use('/visitor',passroute)
app.use('/emp',empdata)
app.use('/security',security)
app.use ('/otp',otp)

const port = process.env.port
const dburl =process.env.MONGODB

mongoose.connect(dburl)
.then(() =>{
    console.log('connected');
  app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log('failed',err);
    
})  

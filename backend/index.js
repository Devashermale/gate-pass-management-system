const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')





const adminroute = require('./routes/adminsignuproute')
const visitorroute = require('./routes/visitorroute')
const passroute = require('./routes/passroute')
const employeeroute = require('./routes/empsignroute')
const empdata = require('./routes/Empdetailroute')
const security = require('./routes/securityroute')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
require('dotenv').config({ override: true });

app.use('/admin',adminroute)
app.use('/employee',employeeroute)
app.use('/user',visitorroute)
app.use('/visitor',passroute)
app.use('/emp',empdata)
app.use('/security',security)

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

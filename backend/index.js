

const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const adminroute = require('./routes/adminsignuproute')
const visitorroute = require('./routes/visitorroute')
const passroute = require('./routes/passroute')
const employeeroute = require('./routes/empsignroute')
const empdata = require('./routes/Empdetailroute')
const app = express()
app.use(express.json())
dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/admin',adminroute)
app.use('/employee',employeeroute)
app.use('/user',visitorroute)
app.use('/visitor',passroute)
app.use('/emp',empdata)

const port = process.env.port
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.8.1')
.then(()=>{
    console.log('connected');
  app.listen(port, ()=>{
  console.log(`http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log('failed',err);
    
})  

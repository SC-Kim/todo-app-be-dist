const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD
console.log("mongouri", MONGODB_URI_PROD)
app.use(bodyParser.json())
app.use('/api', indexRouter)

const mongoURI = MONGODB_URI_PROD

mongoose.connect(mongoURI, {useNewUrlParser:true}).then(() => {
    console.log("mongoose connected!!")
}).catch((err)=>{
    console.log("DB connection fail", err)
})

app.listen(process.env.PORT || 5002, ()=>{      // 5002(with Atlas DB, local), 5001(local DB, local), 
    console.log("server on 5002")
})



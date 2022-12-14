const express = require('express')

const mongoose = require('mongoose')

const subscribersRouter = require('./routes/subscribers')

// To get our envitoment variables from .env folder
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (error) =>{
    console.error(error)
})

db.once('open', () =>{
    console.log('Connected to database')
})

app.use(express.json())

app.use('/subscribers', subscribersRouter)

app.listen(3000, () =>{
    console.log('Server Started')
})
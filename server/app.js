const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const urlDb = process.env.URL_DB || 'mongodb://localhost:27017/cardsOfKurks'
const PORT = process.env.PORT || 3001

mongoose.Promise = global.Promise
mongoose.connect(urlDb, {useMongoClient: true})

const pathClient = path.join(__dirname, '../client')
app.use(express.static(pathClient))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', require('./api'))

app.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)

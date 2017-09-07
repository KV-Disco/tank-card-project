require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const path = require('path')
const sio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = sio.listen(server)

const urlDb = process.env.URL_DB
const PORT = process.env.PORT

mongoose.Promise = global.Promise
mongoose.connect(urlDb, {useMongoClient: true})

const pathClient = path.join(__dirname, '../client')
app.use(express.static(pathClient))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'CookieOfCardsOfKursk',
  keys: ['hipopotomonstrosesquipedaliofobia', 'supercalifragilisticoespialidoso']
}))

app.use('/api', require('./api'))

io.on('connection', function (socket) {
  socket.on('updateAll', () => {
    io.emit('timeToUpdate')
  })
})

server.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)

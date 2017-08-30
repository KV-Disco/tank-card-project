const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

const tanksData = require('./../data/tank-db.json')
const user1Data = require('./../data/user1.json')
const user2Data = require('./../data/user2.json')

const pathClient = path.join(__dirname, '../client')
console.log(pathClient)
app.use(express.static(pathClient))

app.get('/data', (req, res) => res.send(tanksData))
app.get('/data/user/1', (req, res) => res.send(user1Data))
app.get('/data/user/2', (req, res) => res.send(user2Data))

app.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)

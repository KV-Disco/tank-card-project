const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

const tanksData = require('./../data/tank-db.json')

const pathClient = path.join(__dirname, '../client')
console.log(pathClient)
app.use(express.static(pathClient))

app.get('/data', (req, res) => res.send(tanksData))

app.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)

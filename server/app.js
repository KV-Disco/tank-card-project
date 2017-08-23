const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => console.log('hello'))

app.listen(PORT)
console.log(`Dude PORT ${PORT} is listening.... be scare.....`)

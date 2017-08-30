const express = require('express')
const router = express.Router()

const allTrading = require('./cards/allTrading')

router.get('/cards', allTrading)

module.exports = router

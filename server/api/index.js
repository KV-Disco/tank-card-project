const express = require('express')
const router = express.Router()

const allTrading = require('./cards/allTrading')
const allCards = require('./cards/allCards')

router.get('/trading-cards', allTrading)
router.get('/cards', allCards)

module.exports = router

const express = require('express')
const router = express.Router()

const allTradingCards = require('./cards/allTrading')
const allCards = require('./cards/allCards')
const allUserCards = require('./cards/allUser')

const allUser2Cards = require('./cards/allUser2')
// const userInformation = require('./users/Information')

router.get('/trading-cards', allTradingCards)
router.get('/cards', allCards)
router.get('/user1', allUserCards)

router.get('/user2', allUser2Cards)
// router.get('/user/:username', userInformation)

module.exports = router

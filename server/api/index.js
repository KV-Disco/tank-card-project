const express = require('express')
const router = express.Router()

const allTradingCards = require('./cards/allTrading')
const allCards = require('./cards/allCards')
const allUserCards = require('./cards/allUser')
const makeTrade = require('./card/makeTrade')
const pushToTrade = require('./card/pushToTrade')

const allUser2Cards = require('./cards/allUser2')
// const userInformation = require('./users/Information')

router.get('/trading-cards', allTradingCards)
router.get('/cards', allCards)
router.get('/user1', allUserCards)
router.put('/trade/pick/:userCardId&:userId', makeTrade)
router.put('/trade/push/:userCardId', pushToTrade)

router.get('/user2', allUser2Cards)
// router.get('/user/:username', userInformation)

module.exports = router

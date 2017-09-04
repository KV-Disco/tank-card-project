const express = require('express')
const router = express.Router()

const allTradingCards = require('./cards/allTrading')
const allCards = require('./cards/allCards')
const allUserCards = require('./cards/allUser')
const makeTrade = require('./card/makeTrade')
const pushToTrade = require('./card/pushToTrade')
const userCheck = require('./users/userCheck')
const userSession = require('./users/session')
const userInfo = require('./users/info')

router.get('/trading-cards', allTradingCards)
router.get('/cards', allCards)
router.get('/user/cards', allUserCards)
router.get('/user/check/:username&:password', userCheck)
router.get('/user/session', userSession)
router.get('/user', userInfo)
router.put('/trade/pick/:userCardId&:newUserId&:oldUserId', makeTrade)
router.put('/trade/push/:userCardId', pushToTrade)

module.exports = router

const express = require('express')
const router = express.Router()

const userCards = require('./tanks/userCards')

router.get('/cards', userCards)

module.exports = router

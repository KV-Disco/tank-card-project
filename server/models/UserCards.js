/* global Schema */
const mongoose = require('mongoose')
const collection = 'UsersCards'
const ObjectId = mongoose.Schema.Types.ObjectId

var usersCardsSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    required: true
  },
  card: {
    type: ObjectId,
    required: true
  },
  trading: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('UsersCards', usersCardsSchema)

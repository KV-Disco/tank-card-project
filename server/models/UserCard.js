/* global Schema */
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

var userCardSchema = new mongoose.Schema({
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
}, { collection:'user_cards' })

module.exports = mongoose.model('UserCard', userCardSchema)

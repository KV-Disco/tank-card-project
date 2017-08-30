const mongoose = require('mongoose')

var cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
}, { collection: 'cards' })

module.exports = mongoose.model('Card', cardSchema)

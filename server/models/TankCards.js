const mongoose = require('mongoose')
const collection = 'tankCards'

var cardsSchema = new mongoose.Schema({
  tankName: String,
  description: String,
  img: String
}, { collection })

module.exports = mongoose.model('TankCards', cardsSchema)

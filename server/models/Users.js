const mongoose = require('mongoose')
const collection = 'Users'

var usersSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String
}, { collection })

module.exports = mongoose.model('Users', usersSchema)

const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String
}, { collection: 'users' })

module.exports = mongoose.model('User', userSchema)

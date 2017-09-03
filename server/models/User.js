const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
}, { collection: 'users' })

module.exports = mongoose.model('User', userSchema)

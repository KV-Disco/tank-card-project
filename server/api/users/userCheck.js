const User = require('../../models/User')

function userCheck (req, res) {
  const {username, password} = req.params
  console.log(username)
  console.log(password)
  User.find({username, password})
    .then(user => {
      req.session.id = user[0]._id
      res.send(req.session)
    })
    .catch(err => res.send(err))
}

module.exports = userCheck

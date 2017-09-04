const User = require('../../models/User')

function userInfo (req, res) {
  const id = req.session.id

  User.findById(id)
    .then(user => {
      res.json(user)
    })
    .catch(err => res.send(err))
}

module.exports = userInfo

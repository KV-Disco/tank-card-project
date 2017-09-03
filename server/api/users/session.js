const User = require('../../models/User')

function session (req, res) {
  const {id} = req.session

  User.findById(id)
    .then(user => {
      console.log(user)
      res.json(user)
    })
    .catch(err => res.send(err))
}

module.exports = session

const Card = require('../../models/User')

function allCards (req, res) {
  const {username} = req.params
  Card.find({username})
    .then(user => res.send(user))
    .catch(err => res.send(err))
}

module.exports = allCards

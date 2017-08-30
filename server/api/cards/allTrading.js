const UserCard = require('../../models/UserCard')

function allTrading (req, res) {
  UserCard.find({trading: true})
    .then(cards => res.send(cards))
    .catch(err => res.send(err))
}

module.exports = allTrading
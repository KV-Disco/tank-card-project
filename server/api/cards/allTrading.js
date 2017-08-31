const UserCard = require('../../models/UserCard')

function allTrading (req, res) {
  UserCard.find({trading: true})
  	.populate('card')
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = allTrading

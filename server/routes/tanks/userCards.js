const TankCards = require('../../models/tankCards')
const UserCards = require('../../models/UserCards')
const Users = require('../../models/Users')

function allTradingCards (req, res) {
  UserCards.find({trading: true})
    .then(cards => res.send(cards))
    .catch(err => res.send(err))
}

module.exports = allTradingCards
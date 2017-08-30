const TankCards = require('../../models/tankCards')
const UserCards = require('../../models/UserCards')
const Users = require('../../models/Users')

function getCards (req, res) {
  UserCards.find({trading: true})
    .then(cards => console.log(cards))
}

module.exports = getCards

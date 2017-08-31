const Card = require('../../models/Card')

function allCards (req, res) {
  Card.find()
    .then(cards => res.send(cards))
    .catch(err => res.send(err))
}

module.exports = allCards

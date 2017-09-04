const UserCard = require('../../models/UserCard')

function makeTrade (req, res) {
  const {userCardId} = req.params

  UserCard.findByIdAndUpdate(userCardId, {trading: true})
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = makeTrade

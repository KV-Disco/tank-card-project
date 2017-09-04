const UserCard = require('../../models/UserCard')

function allUser (req, res) {
  const userId = req.session.id
  console.log(userId)
  UserCard.find({user: userId})
    .populate('card')
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = allUser

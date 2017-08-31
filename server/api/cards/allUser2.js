const UserCard = require('../../models/UserCard')

function allUser2 (req, res) {
  // const {id} = req.params

  UserCard.find({user: '59a690247300a9c6dab14eee'})
    .populate('card')
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = allUser2

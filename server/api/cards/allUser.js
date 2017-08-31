const UserCard = require('../../models/UserCard')

function allUser (req, res) {
  // const {id} = req.params

  UserCard.find({user: '59a6983c7300a9c6dab14f03'})
    .populate('card')
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = allUser

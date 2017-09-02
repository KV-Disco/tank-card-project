const UserCard = require('../../models/UserCard')

function makeTrade (req, res) {
  const {userCardId, userId} = req.params

  UserCard.findByIdAndUpdate(userCardId, {user: userId, trading: false})
    .then(cards => res.json(cards))
    .catch(err => res.send(err))
}

module.exports = makeTrade

// { userCardId: '59a7de01b184deea4cfc042b',
//   newUserId: '59a6983c7300a9c6dab14f03' }

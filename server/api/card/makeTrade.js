const UserCard = require('../../models/UserCard')

function makeTrade (req, res) {
  const {userCardId, newUserId, oldUserId} = req.params

  console.log(req.session.id)

  if (oldUserId !== newUserId) {
    console.log('son diferentes')
    UserCard.findByIdAndUpdate(userCardId, {user: newUserId, trading: false})
    .then(cards => res.json(cards))
    .catch(err => res.send(err))

    UserCard.find({user: newUserId, trading: true})
    .then(cards => {
      const random = Math.floor(Math.random() * cards.length)
      console.log('this id ' + cards[random]._id)

      UserCard.findByIdAndUpdate(cards[random]._id, {user: oldUserId, trading: false})
        .then(cards => res.json(cards))
        .catch(err => res.send(err))
    })
    .catch(err => res.send(err))
  }
}

module.exports = makeTrade

// { userCardId: '59a7de01b184deea4cfc042b',
//   newUserId: '59a6983c7300a9c6dab14f03' }

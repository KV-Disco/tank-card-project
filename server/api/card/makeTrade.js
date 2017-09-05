const UserCard = require('../../models/UserCard')

function makeTrade (req, res) {
  const {userCardId, newUserId, oldUserId} = req.params

  console.log(req.session.id)

  if (oldUserId !== newUserId) {
    UserCard.find({user: newUserId, trading: true})
      .then((cards) => {
        if (cards.length > 0) {
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
        } else {
          res.send(false)
        }
      })
      .catch(err => res.send(err))
  }
}

module.exports = makeTrade

// { userCardId: '59a7de01b184deea4cfc042b',
//   newUserId: '59a6983c7300a9c6dab14f03' }

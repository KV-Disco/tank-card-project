const User = require('../../models/User')
const Card = require('../../models/Card')
const UserCard = require('../../models/UserCard')

function registration (req, res) {
  const {username, password} = req.params

  if (!username || !password || password.length < 4) {
    res.send(true)
  } else {
    User.find({username})
      .then(user => {
        if (user[0]) { res.send(true) } else {
          const newUser = new User({
            username,
            password
          })
          Card.find({}, {_id: true})
            .then(cardsId => {
              for (var i = 20 - 1; i >= 0; i--) {
                const random = Math.floor(Math.random() * cardsId.length)

                const newUserCard = new UserCard({
                  user: newUser._id,
                  card: cardsId[random]._id
                })

                newUserCard.save()
                  .then(() => res.send(false))
                  .catch(err => res.send(err))
              }
            })
          newUser.save()
            .then(() => console.log('New User succesfully created.'))
            .catch(err => res.send(err))
        }
      })
      .catch(err => res.send(err))
  }
}

module.exports = registration

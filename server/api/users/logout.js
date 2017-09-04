function logOut (req, res) {
  req.session.id = undefined

  res.send(console.log('loged Out'))
}

module.exports = logOut

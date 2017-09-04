function session (req, res) {
  const {id} = req.session

  res.send(id)
}

module.exports = session

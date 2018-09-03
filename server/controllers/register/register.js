const bcrypt = require('bcrypt')

const User = require('../../models/User/User')

module.exports = {
  async post (req, res) {
    const username = req.body.username
    const password = req.body.password
    const hash = await bcrypt.hash(password, 10)
    const userAlreadyExists = await User.findOne({ username })
    if (userAlreadyExists) return res.status(409).json({error: 'User already exists.'})
    const user = new User({ username, password: hash })
    user.save((err, data) => {
      if (err) res.status(400).json(err)
      res.status(200).json(data)
    })
  }
}

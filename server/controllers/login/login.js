const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../models/User/User')

module.exports = {

  async post (req, res) {
    console.log(req.body)
    const username = req.body.username
    const password = req.body.password
    const user = await User.findOne({ username })
    if (!user) return res.status(404).send('User does not exist.')
    const passwordIsValid = await bcrypt.compare(password, user.password)
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null })
    let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 })
    res.status(200).send({ auth: true, token, user })
  }

}

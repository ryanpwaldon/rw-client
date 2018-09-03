const express = require('express')
const router = express.Router()
const path = require('path')

const login = require('../controllers/login/login')
const register = require('../controllers/register/register')

router.use(express.static(__dirname + '../../../dist'))
router.post('/api/login', login.post)
router.post('/api/register', register.post)
router.get('*', (req, res) => res.sendFile(path.join(__dirname + '../../../dist/index.html')))

module.exports = router

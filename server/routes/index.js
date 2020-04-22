const router = require('express').Router()
const User = require('../controllers/user')
const Authentication = require('../middlewares/authentication')
const Authorization = require('../middlewares/authorization')

router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router
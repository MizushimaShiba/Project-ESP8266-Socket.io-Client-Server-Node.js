const { User } = require('../models')
const Bcrypt = require("../helper/bcrypt")
const JWT = require('../helper/jwt')

module.exports = class Controller {
  static register(req, res, next) {
    User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(data => {
        res.status(201).json({username: data.username})
      })
      .catch(err => next(err) )
  }
  static login(req, res, next) {
    User.findOne({where: {username: req.body.username}})
      .then(data => {
        if (data) {
          if (Bcrypt.comparingPassword(req.body.password, data.password)) {
            const payload = {username: data.username, id: data.id}
            const token = JWT.sign(payload)
            res.status(200).json({token})
          } else next({name: "Wrong password", message: "Password email is wrong"})
        } else next({name: "Wrong password", message: "Password email is wrong"})
      })
      .catch(err => next(err))
  }
}
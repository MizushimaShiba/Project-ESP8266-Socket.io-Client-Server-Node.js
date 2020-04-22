const bcrypt = require('bcryptjs')

const SALT = 10

module.exports = class Bcrypt {
  static hashPassword(password) {
    const salt = bcrypt.genSaltSync(SALT)
    return bcrypt.hashSync(password, salt)
  }

  static comparingPassword(requestBodyPassword, databasePassword) {
    return bcrypt.compareSync(requestBodyPassword, databasePassword)
  }
}
const jsonwebtoken = require('jsonwebtoken')
const PRIVATE_KEY = 'sshhhh diam kamu'

module.exports = class JWT {
  static sign(payload) {
    return jsonwebtoken.sign(payload, PRIVATE_KEY)
  }
  static verify(token) {
    return jsonwebtoken.verify(token, PRIVATE_KEY)
  }
}
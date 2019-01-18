const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtParse (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email is already in use'
      })
    }
  },

  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const isPasswordValid = (password) === user.password
      if (!isPasswordValid) {
        res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const verifiedUser = user.toJSON()
      res.send({
        user: verifiedUser,
        token: jwtParse(verifiedUser)
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error occurred trying to login'
      })
    }
  }
}

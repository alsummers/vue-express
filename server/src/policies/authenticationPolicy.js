const Joi = require('joi')
// middleware
module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password fails to meet requirements
             <br>
             1. Passwords must be lower case or upper case letters or numbers 0-9 ONLY
             <br>
             2. Passwords must be greater than 8 characters long and less than 32 characters long
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }
  }
}

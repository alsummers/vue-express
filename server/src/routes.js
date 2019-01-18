const authentication = require('./controllers/authentication')

const authenticationPolicy = require('./policies/authenticationPolicy')
module.exports = (app) => {
  app.post('/register', authenticationPolicy.register, authentication.register)
  app.post('/login', authentication.login)
}

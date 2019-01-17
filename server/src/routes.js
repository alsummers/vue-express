const authentication = require('./controllers/authentication')

module.exports = (app) => {
  app.post('/register', authentication.register)
}

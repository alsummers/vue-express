const authentication = require('./controllers/authentication')
const songsController = require('./controllers/songController')
const authenticationPolicy = require('./policies/authenticationPolicy')
module.exports = (app) => {
  app.post('/register', authenticationPolicy.register, authentication.register)
  app.post('/login', authentication.login)
  app.get('/songs', songsController.songIndex)
  app.post('/songs', songsController.post)
}

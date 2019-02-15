const authentication = require('./controllers/authentication')
const songsController = require('./controllers/songController')
const authenticationPolicy = require('./policies/authenticationPolicy')
const BookmarksController = require('./controllers/bookmarksController.js')
module.exports = (app) => {
  app.post('/register', authenticationPolicy.register, authentication.register)
  app.post('/login', authentication.login)
  app.get('/songs', songsController.songIndex)
  app.get('/songs/:songId', songsController.show)
  app.post('/songs', songsController.post)
  app.put('/songs/:songId', songsController.put)
  app.get('/bookmarks', BookmarksController.index)
  // app.post('/bookmarks', BookmarksController.post)
  // app.delete('/bookmarks/:bookmarkId', BookmarksController.delete)
}

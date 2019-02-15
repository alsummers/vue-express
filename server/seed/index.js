const {sequelize, Song, User, Bookmark} = require('../src/models')

const Promise = require('bluebird') // Promise library
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync( { force: true } )
   .then(async function(){
      await Promise.all(
          users.map(user => {
              User.create(user)
          })
      )

      await Promise.all(
        songs.map(song => {
            Song.create(song)
        })

    )
    // user and songs must exist before association
      await Promise.all(
        bookmarks.map(bookmark => {
            Bookmark.create(bookmark)
        })

    )
    
   })
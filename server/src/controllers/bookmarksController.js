const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to fetch bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this set as a bookmark'
        })
      }
      const newbookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newbookmark)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const { id } = req.params

      const bookmark = await Bookmark.findById(id)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log('hjhj===============', err)
      res.status(500).send({
        error: 'an error has occurred trying to remove bookmark'
      })
    }
  }
}

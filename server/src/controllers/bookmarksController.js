const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      console.log(req)
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
        error: 'cannot retreive bookmark'
      })
    }
  }
}

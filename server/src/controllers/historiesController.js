const { History, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const { userId } = req.query

      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })
      // returns song as flat object
        .map(history => history.toJSON())
        .map(history => _.extend(
          {},
          history.Song,
          history
        ))
      res.send(histories)
    } catch (err) {
      res.status(500).send({
        error: 'cannot retreive history'
      })
    }
  },
  async post (req, res) {
    try {
      const { songId, userId } = req.body.params
      const history = await History.create({
        SongId: songId,
        UserId: userId
      })
      res.send(history)
    } catch (err) {
      res.status(500).send({
        error: 'cannot create history object'
      })
    }
  }
}

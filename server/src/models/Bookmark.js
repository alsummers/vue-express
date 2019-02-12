module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
  })
  // Build association between song and user
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  }
  return Bookmark
}

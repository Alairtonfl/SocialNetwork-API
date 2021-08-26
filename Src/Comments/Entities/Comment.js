const { Model, DataTypes } = require('sequelize');

class Comment extends Model{
  static init(sequelize){
    super.init({
      body: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments',
      freezeTableName: true
    }
    )
  }

  static associate(models){
    this.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    this.belongsTo(models.Post, {
      foreignKey: 'post_id'
    })
  }
}


module.exports = Comment;
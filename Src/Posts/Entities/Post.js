const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      image: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'Post',
      tableName: 'posts',
      freezeTableName: true
    }
    )
  }

  static associate(models){
    this.belongsTo(models.User, {
      foreignKey: 'user_id'
    })
    this.hasMany(models.Comment, {
      foreignKey: 'post_id'
    })
  }
}

module.exports = Post;
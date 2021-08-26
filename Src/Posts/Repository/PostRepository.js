const Comment = require('../../Comments/Entities/Comment');
const User = require('../../Users/Entities/User');
const Post = require('../Entities/Post')

module.exports = {
  async selectPosts(){
    const posts = await Post.findAll({
      order: [['updated_at', 'DESC']],
      include: [
        {
        model: User,
        order: [['updated_at', 'DESC']],
        attributes: { exclude: ['password']},
      },
      {
        model: Comment,
        include:[
          {
            model: User
          }
        ],
        order: [['updated_at', 'DESC']],
      }
    ]
    })
    return posts;
  },

  async insertPost(title, body, user_id, image){
    try{
      const post = await Post.create({ title, body, user_id, image})
      return post;
    }catch(e){
      return e;
    }
  },

  async findUserPosts(user_id){
    const posts = await Post.findAll({ where: { user_id } })
    return posts;
  }
}
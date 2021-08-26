const Comment = require('../Entities//Comment')

module.exports = {
  async selectComments(){
    const comments = await Comment.findAll({
      order: [['updated_at', 'DESC']],
    });
    return comments;
  },

  async insertComments(body, user_id, post_id){
    try{
      const comment = await Comment.create({body, user_id, post_id});
      return comment;
    }catch(e){
      return e;
    }
  }
}
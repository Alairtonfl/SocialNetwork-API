const CommentRepository = require('../Repository/CommentRepository');

module.exports = {
  async index(req, res){
    const comments = await CommentRepository.selectComments();
    return res.status(200).send(comments);
  },

  async store(req, res){
    try{
      const { body, user_id, post_id } = req.body;
      const comment = await CommentRepository.insertComments(body, user_id, post_id);
      return res.status(200).send(comment);
    }catch(e){
      return res.status(400).send(e);
    }
  }
}
const PostRepository = require('../Repository/PostRepository');

module.exports = {

  async index(req, res){
    const posts = await PostRepository.selectPosts();
    return res.send(posts);
  },

  async store(req, res){
    try{
      const { title, body, user_id, image } = req.body;
      const post = await PostRepository.insertPost(title, body, user_id, image);
      return res.send(post)
    }catch(e){
      return res.send(e)
    }
  }
}
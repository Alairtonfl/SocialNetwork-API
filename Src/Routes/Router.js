const Express = require("express");
const routes = Express.Router();

const UserController = require('../Users/Controllers/UserController')
const PostController = require('../Posts/Controllers/PostController');
const CommentController = require("../Comments/Controllers/CommentController");


routes.get('/users', UserController.index)
routes.post('/users/register', UserController.store)
routes.post('/users/login', UserController.login);

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

routes.get('/comments', CommentController.index);
routes.post('/comments', CommentController.store);

module.exports = routes;
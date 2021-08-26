const Sequelize = require('sequelize');
const database = require('../Config/Connection');

const User = require('../Src/Users/Entities/User')
const Post = require('../Src/Posts/Entities/Post');
const Comment = require('../Src/Comments/Entities/Comment');

const conn = new Sequelize(database);

User.init(conn);
Post.init(conn);
Comment.init(conn);

Post.associate(conn.models);
Comment.associate(conn.models);

module.exports = conn;
// collect and export User model data
const User = require('./User');
const Post = require("./Post");
const Vote = require("./Vote");

// create associations
User.hasMany(Post, { // define User and Post relatopnship as One to Many (1 user, many posts)
     foreignKey: 'user_id' // foreign key is user id whch is designated in Post model
  }); 

  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });
  
  Vote.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });
  

module.exports = { User, Post, Vote };
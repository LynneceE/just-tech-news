// collect and export User model data
const User = require('./User');
const Post = require("./Post")

// create associations
User.hasMany(Post, { // define User and Post relatopnship as One to Many (1 user, many posts)

    foreignKey: 'user_id' // foreign key is user id whch is designated in Post model
  }); 
module.exports = { User, Post };
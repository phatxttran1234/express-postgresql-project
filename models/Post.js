// models/Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');  // Ensure correct path to db.js
const User = require('./User');  // Ensure User model is imported correctly

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.hasMany(Post, { as: 'posts' });
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = Post;

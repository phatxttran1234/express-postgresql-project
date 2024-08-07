// addPost.js
const Post = require('./models/Post');
const sequelize = require('./db');

const addPost = async (userId, title, content) => {
  try {
    const post = await sequelize.transaction(async (transaction) => {
      const newPost = await Post.create({ userId, title, content }, { transaction });
      console.log('Post created:', newPost.toJSON());
      return newPost;
    });
    return post;
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.error('Error adding post: Title already exists.');
    } else {
      console.error('Error adding post:', error);
    }
    throw error; // Re-throw the error to handle it in the calling function
  }
};

module.exports = addPost;

// addPost.js
const Post = require('./models/Post');

const addPost = async (userId, title, content) => {
  try {
    const post = await Post.create({ userId, title, content });
    console.log('Post created:', post.toJSON());
    return post;
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

module.exports = addPost;

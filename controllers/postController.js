// controllers/postController.js
const { Post } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, UserId } = req.body;
    const newPost = await Post.create({ title, content, UserId });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createPost };

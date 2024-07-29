// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { addPost } = require('..');

// Create a new post
router.post('/', async (req, res) => {
  const { userId, title, content } = req.body;
  try {
    const post = await addPost(userId, title, content);
    res.json(post);
  } catch (error) {
    res.status(500).send('Error creating post');
  }
});

module.exports = router;

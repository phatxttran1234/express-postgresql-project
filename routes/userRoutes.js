// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { addUser, checkUser } = require('..');

// Create a new user
router.post('/', async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await addUser(username, email);
    res.json(user);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

// Get user by username
router.get('/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await checkUser(username);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

module.exports = router;

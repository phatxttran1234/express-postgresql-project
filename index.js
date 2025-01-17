// index.js
const express = require('express');
const sequelize = require('./db');  
const addUser = require('./addUser');
const addPost = require('./addPost');
const checkUser = require('./checkUser');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route Handlers
app.post('/users', async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await addUser(username, email);
    res.status(201).json(user); // Set status code to 201 for resource creation
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});

app.post('/posts', async (req, res) => {
  const { userId, title, content } = req.body;
  try {
    const post = await addPost(userId, title, content);
    res.status(201).json(post); // Set status code to 201 for resource creation
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).send('Error creating post');
  }
});

app.get('/users/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const user = await checkUser(username);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
});

// Use Route Modules
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Start the Server
const startServer = async () => {
  try {
    await sequelize.sync();  // Ensure models are synchronized
    console.log('Database connected and synchronized.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Initialize the server
startServer();

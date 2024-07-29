// db.js
const { Sequelize } = require('sequelize');

// Replace 'your_password' with your PostgreSQL password
const sequelize = new Sequelize('express_postgresql_project', 'postgres', 'chothuyanh', {
  host: 'localhost',
  dialect: 'postgres',
});

// Authenticate and sync models
const connectAndSync = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Import models after connection is established
    const User = require('./models/User');
    const Post = require('./models/Post');

    // Sync models with the database
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Initialize connection and sync
connectAndSync();

module.exports = sequelize;

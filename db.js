const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with the database connection parameters
const sequelize = new Sequelize('express_postgresql_project', 'postgres', 'chothuyanh', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set to true if you want to see SQL queries in the console
});

// Function to authenticate and sync models with the database
const connectAndSync = async () => {
  try {
    // Authenticate the connection
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Import models after the connection is established
    const User = require('./models/User');
    const Post = require('./models/Post');

    // Sync models with the database
    // Use `force: true` only for development purposes. In production, use `alter: true` or manage migrations manually
    await sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Initialize connection and sync
connectAndSync();

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;

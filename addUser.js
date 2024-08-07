const { User } = require('./models/User');
const sequelize = require('./db');

const addUser = async (username, email) => {
  try {
    // Using a transaction to ensure the operation is atomic
    const user = await sequelize.transaction(async (transaction) => {
      // Create a new user with the provided username and email
      const newUser = await User.create({ username, email }, { transaction });
      console.log('User created:', newUser.toJSON());
      return newUser;
    });
    return user;
  } catch (error) {
    // Handle specific Sequelize error for unique constraint violations
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.error('Error adding user: Username or email already exists.');
    } else {
      console.error('Error adding user:', error);
    }
    // Re-throw the error to be handled by the calling function
    throw error;
  }
};

module.exports = addUser;

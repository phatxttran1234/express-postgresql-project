// addUser.js
const User = require('./models/User');

const addUser = async (username, email) => {
  try {
    const user = await User.create({ username, email });
    console.log('User created:', user.toJSON());
    return user;
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

module.exports = addUser;


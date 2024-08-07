// checkUser.js
const User = require('./models/User');

const checkUser = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (user) {
      console.log('User exists:', user.toJSON());
      return user;
    } else {
      console.log('User does not exist');
      return null;
    }
  } catch (error) {
    console.error('Error checking user:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

module.exports = checkUser;

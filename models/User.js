// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');  // Ensure correct path to db.js

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;

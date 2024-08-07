// testConnection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express_postgresql_project', 'postgres', 'chothuyanh', {
  host: 'localhost',
  dialect: 'postgres',
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

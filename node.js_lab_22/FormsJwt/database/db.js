const Sequelize = require('sequelize');
const config = require('../config/db');
const sequelize = new Sequelize(process.env.SEQUELIZE_DATABASE, process.env.SEQUELIZE_USERNAME, process.env.SEQUELIZE_PASSWORD, config);
module.exports = { sequelize, Sequelize };

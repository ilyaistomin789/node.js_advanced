const Sequelize = require('sequelize');
const config = require('../config/db_config');
const sequelize = new Sequelize('nodejs_lab_4', 'stmnl', '71182528', config);
module.exports = {sequelize, Sequelize}

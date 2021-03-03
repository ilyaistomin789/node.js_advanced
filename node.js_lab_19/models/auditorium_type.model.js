const { DataTypes } = require('sequelize');
const db = require('../database/db.js');

module.exports = db.sequelize.define('AUDITORIUM_TYPE', {
        AUDITORIUM_TYPE: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
        AUDITORIUM_TYPENAME: {type: DataTypes.STRING}
        },{timestamps: false, freezeTableName: true})

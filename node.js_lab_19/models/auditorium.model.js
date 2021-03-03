const { DataTypes } = require('sequelize');
const db = require('../database/db.js');
const auditoriumType = require('./auditorium_type.model');
const auditorium = db.sequelize.define('AUDITORIUM', {
        AUDITORIUM: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
        AUDITORIUM_TYPE: {type: DataTypes.STRING},
        AUDITORIUM_CAPACITY: {type: DataTypes.INTEGER},
        AUDITORIUM_NAME: {type: DataTypes.STRING},
},{timestamps: false, freezeTableName: true})
auditorium.hasMany(auditoriumType, {as: 'auditorium_auditoriumTypes', foreignKey: 'AUDITORIUM_TYPE', sourceKey: 'AUDITORIUM_TYPE'});
module.exports = auditorium;

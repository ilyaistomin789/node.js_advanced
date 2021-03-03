const { DataTypes } = require('sequelize');
const db = require('../database/db.js');
const Pulpit = require('./pulpit.model');
const Subject = db.sequelize.define('SUBJECT', {
    SUBJECT: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    SUBJECT_NAME: {type: DataTypes.STRING},
    PULPIT: {type: DataTypes.STRING}
},{timestamps: false, freezeTableName: true})
Subject.hasMany(Pulpit, {as: 'subject_pulpits', foreignKey: 'PULPIT', sourceKey: 'PULPIT'});
module.exports = Subject;

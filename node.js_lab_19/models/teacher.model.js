const { DataTypes } = require('sequelize');
const db = require('../database/db.js');
const pulpit = require('./pulpit.model');
const teacher = db.sequelize.define('TEACHER', {
    TEACHER: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    TEACHER_NAME: {type: DataTypes.STRING},
    PULPIT: {type: DataTypes.STRING},
},{timestamps: false, freezeTableName: true})
module.exports = teacher;

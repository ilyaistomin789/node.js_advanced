const { DataTypes } = require('sequelize');
const db = require('../database/db.js');
const teacher = require('./teacher.model')
const pulpit = db.sequelize.define('PULPIT', {
    PULPIT: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    PULPIT_NAME: {type: DataTypes.STRING},
    FACULTY: {type: DataTypes.STRING},
},{timestamps: false, freezeTableName: true});
pulpit.hasMany(teacher, {as: 'pulpit_teachers',foreignKey: 'PULPIT', sourceKey: 'PULPIT'})
module.exports = pulpit;


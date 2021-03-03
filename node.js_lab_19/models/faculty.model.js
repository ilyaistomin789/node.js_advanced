const { DataTypes } = require('sequelize');
const db = require('../database/db.js');
const pulpit = require('./pulpit.model');
const teacher = require('./teacher.model');
const faculty = db.sequelize.define('FACULTY', {
    FACULTY: {type: DataTypes.STRING, allowNull: false, primaryKey: true},
    FACULTY_NAME: {type: DataTypes.STRING}
},{
    timestamps: false, freezeTableName: true,
    hooks: {
    beforeCreate(attributes, options) {
        console.log('FACULTY BEFORE CREATE HOOK');
    },
    afterCreate(attributes, options) {
        console.log('FACULTY AFTER CREATE HOOK');
    }
    }})
faculty.hasMany(pulpit, {as: 'faculty_pulpits', foreignKey: 'FACULTY', sourceKey: 'FACULTY'});
module.exports = faculty;

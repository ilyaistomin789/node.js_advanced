const { DataTypes } = require('sequelize')
const db = require('../database/db');
const Repo = require('./repo.model');
const User = db.sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, primaryKey: false },
    email: { type: DataTypes.STRING, allowNull: false, primaryKey: false },
    password: { type: DataTypes.STRING, allowNull: false, primaryKey: false },
    role: { type: DataTypes.STRING, allowNull: false, primaryKey: false },
}, {timestamps: false, freezeTableName: true})
User.hasMany(Repo, {
    foreignKey: 'authorId'
});

module.exports = User;

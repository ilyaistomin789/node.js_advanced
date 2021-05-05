const { DataTypes } = require('sequelize')
const db = require('../database/db');
const Commit = require('./commit.model');
const Repo = db.sequelize.define('repos', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false, primaryKey: false },
    authorId: { type: DataTypes.INTEGER, allowNull: false }
}, {timestamps: false, freezeTableName: true})
Repo.hasMany(Commit, {
    foreignKey: 'RepoId'
});

module.exports = Repo;

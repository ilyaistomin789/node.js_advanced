const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Commit = db.sequelize.define('commits', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    repoId: { type: DataTypes.INTEGER, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: false }
}, {timestamps: false, freezeTableName: true})

module.exports = Commit;

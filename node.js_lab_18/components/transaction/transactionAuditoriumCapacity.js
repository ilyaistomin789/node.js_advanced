const {sequelize, Sequelize} = require('../../database/db');
const Auditorium = require('../models/auditorium.model.js');

sequelize.authenticate().then(() => {return sequelize.transaction({isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED})})
    .then(t => {
        return Auditorium.update({AUDITORIUM_CAPACITY: 1},{where: {},transaction: t})
            .then((item) => {console.log(item);setTimeout(() => {console.log('TIMEOUT');return t.rollback();},10000)})
            .catch(e => {console.log(e.message)})
    }).catch(e => {console.log(e.message)})

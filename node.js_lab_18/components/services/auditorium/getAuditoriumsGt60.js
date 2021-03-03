const Auditorium = require('../../models/auditorium.model');
const { Op } = require('sequelize');
module.exports = (response) => {
    Auditorium.findAll({where: {AUDITORIUM_CAPACITY:{[Op.gt]: 60}}}).then((auditoriums) => {
        response.end(JSON.stringify(auditoriums));
    }).catch(e => {response.end(JSON.stringify({error: e.message}))})
}

const Auditorium = require('../../models/auditorium.model');
const { Op } = require('sequelize');
module.exports = (response) => {
    Auditorium.findAll({where: {AUDITORIUM_CAPACITY:{[Op.gt]: 60}}}).then((auditoriums) => {
        response.json(JSON.stringify(auditoriums));
    }).catch(e => {response.json(JSON.stringify({error: e.message}))})
}

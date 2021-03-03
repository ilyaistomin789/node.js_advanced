const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (value,response) => {
    AuditoriumType.create({AUDITORIUM_TYPE: value.AUDITORIUM_TYPE, AUDITORIUM_TYPENAME: value.AUDITORIUM_TYPENAME})
        .then(item => {response.json(JSON.stringify(item.dataValues))})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

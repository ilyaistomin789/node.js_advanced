const Auditorium = require('../../models/auditorium.model');

module.exports = (value, response) => {
        Auditorium.create({AUDITORIUM: value.AUDITORIUM, AUDITORIUM_TYPE: value.AUDITORIUM_TYPE, AUDITORIUM_CAPACITY: value.AUDITORIUM_CAPACITY, AUDITORIUM_NAME: value.AUDITORIUM_NAME })
            .then(item => {response.json(JSON.stringify(item.dataValues))})
            .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

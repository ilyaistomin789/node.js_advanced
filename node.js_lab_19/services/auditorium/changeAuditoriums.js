const Auditorium = require('../../models/auditorium.model');

module.exports = (value,response) => {
    Auditorium.update({AUDITORIUM_TYPE: value.AUDITORIUM_TYPE, AUDITORIUM_CAPACITY: value.AUDITORIUM_CAPACITY, AUDITORIUM_NAME: value.AUDITORIUM_NAME },
        {where: {AUDITORIUM: value.AUDITORIUM}})
        .then(item => {response.send(`Updated rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

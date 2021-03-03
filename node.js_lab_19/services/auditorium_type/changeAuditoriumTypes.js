const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (value,response) => {
    AuditoriumType.update({AUDITORIUM_TYPE: value.AUDITORIUM_TYPE}, {where: {AUDITORIUM_TYPENAME: value.AUDITORIUM_TYPENAME}})
        .then(item => {response.send(`Updated rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

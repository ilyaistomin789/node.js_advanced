const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (response) =>  AuditoriumType.findAll()
    .then((auditoriumTypes) => {
        response.end(JSON.stringify(auditoriumTypes))
    }).catch(e => response.end(JSON.stringify({error: e.message})));

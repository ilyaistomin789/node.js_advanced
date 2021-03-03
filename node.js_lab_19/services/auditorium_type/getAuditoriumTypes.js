const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (response) =>  AuditoriumType.findAll()
    .then((auditoriumTypes) => {
        response.json(JSON.stringify(auditoriumTypes))
    }).catch(e => response.json(JSON.stringify({error: e.message})));

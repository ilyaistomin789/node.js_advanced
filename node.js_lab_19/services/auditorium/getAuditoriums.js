const Auditorium = require('../../models/auditorium.model');

module.exports = (response) => {
    Auditorium.findAll().then(auditoriums => {
        response.json(JSON.stringify(auditoriums));
    }).catch((e) => {response.json(JSON.stringify({error: e.message}));})
}

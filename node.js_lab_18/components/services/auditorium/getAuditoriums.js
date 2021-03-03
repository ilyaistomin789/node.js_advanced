const Auditorium = require('../../models/auditorium.model');

module.exports = (response) => {
    Auditorium.findAll().then(auditoriums => {
        response.end(JSON.stringify(auditoriums));
    }).catch((e) => {response.end(JSON.stringify({error: e.message}));})
}

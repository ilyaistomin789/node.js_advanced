const Auditorium = require('../../models/auditorium.model');

module.exports = (id,response) => {
    Auditorium.destroy({where: {AUDITORIUM: id}})
        .then(item => {response.send(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (id,response) => {
    AuditoriumType.destroy({where: {AUDITORIUM_TYPE: id}})
        .then(item => {response.send(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

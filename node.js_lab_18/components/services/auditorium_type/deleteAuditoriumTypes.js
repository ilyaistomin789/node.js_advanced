const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (id,request,response) => {
    AuditoriumType.destroy({where: {AUDITORIUM_TYPE: id}})
        .then(item => {response.end(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.end(JSON.stringify({error: e.message}));})
}

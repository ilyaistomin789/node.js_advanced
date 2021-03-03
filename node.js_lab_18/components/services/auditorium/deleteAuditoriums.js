const Auditorium = require('../../models/auditorium.model');

module.exports = (id,request,response) => {
    Auditorium.destroy({where: {AUDITORIUM: id}})
        .then(item => {response.end(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.end(JSON.stringify({error: e.message}));})
}

const Faculty = require('../../models/faculty.model');

module.exports = (id,response) => {
    Faculty.destroy({where: {FACULTY: id}})
        .then(item => {response.send(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

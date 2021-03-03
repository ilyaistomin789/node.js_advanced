const Pulpit = require('../../models/pulpit.model');

module.exports = (id,response) => {
    Pulpit.destroy({where: {PULPIT: id}})
        .then(item => {response.send(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

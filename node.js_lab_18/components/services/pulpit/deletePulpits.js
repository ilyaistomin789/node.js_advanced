const Pulpit = require('../../models/pulpit.model');

module.exports = (id,request,response) => {
    Pulpit.destroy({where: {PULPIT: id}})
        .then(item => {response.end(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.end(JSON.stringify({error: e.message}));})
}

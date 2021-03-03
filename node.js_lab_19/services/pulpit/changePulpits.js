const Pulpit = require('../../models/pulpit.model');

module.exports = (value, response) => {
    Pulpit.update({PULPIT_NAME: value.PULPIT_NAME, FACULTY: value.FACULTY}, {where:{PULPIT: value.PULPIT}})
        .then(item => {response.send(`Updated rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

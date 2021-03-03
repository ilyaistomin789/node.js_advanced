const Pulpit = require('../../models/pulpit.model');

module.exports = (value, response) => {
    Pulpit.create({PULPIT: value.PULPIT, PULPIT_NAME: value.PULPIT_NAME, FACULTY: value.FACULTY})
        .then(item => {response.json(JSON.stringify(item.dataValues))})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

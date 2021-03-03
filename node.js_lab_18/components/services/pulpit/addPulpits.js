const Pulpit = require('../../models/pulpit.model');

module.exports = (request, response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })
    request.on('end', () => {
        const data_json = JSON.parse(data);
        Pulpit.create({PULPIT: data_json.PULPIT, PULPIT_NAME: data_json.PULPIT_NAME, FACULTY: data_json.FACULTY})
            .then(item => {response.end(JSON.stringify(item.dataValues))})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })
}

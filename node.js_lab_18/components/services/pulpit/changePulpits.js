const Pulpit = require('../../models/pulpit.model');

module.exports = (request, response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })
    request.on('end', () => {
        const data_json = JSON.parse(data);
        Pulpit.update({PULPIT_NAME: data_json.PULPIT_NAME, FACULTY: data_json.FACULTY}, {where:{PULPIT: data_json.PULPIT}})
            .then(item => {response.end(`Updated rows: ${JSON.stringify(item)}`)})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })
}

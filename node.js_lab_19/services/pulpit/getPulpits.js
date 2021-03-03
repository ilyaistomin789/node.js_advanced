const Pulpit = require('../../models/pulpit.model');

module.exports = (response) => {
    Pulpit.findAll().then(pulpits => {
        console.log(JSON.parse(JSON.stringify(pulpits)))
        response.json(JSON.stringify(pulpits));
    }).catch(e => {response.json(JSON.stringify({error: e.message}))})
}

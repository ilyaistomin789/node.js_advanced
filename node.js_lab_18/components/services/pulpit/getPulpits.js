const Pulpit = require('../../models/pulpit.model');

module.exports = (response) => {
    Pulpit.findAll().then(pulpits => {
        console.log(JSON.parse(JSON.stringify(pulpits)))
        response.end(JSON.stringify(pulpits));
    }).catch(e => {response.end(JSON.stringify({error: e.message}))})
}

const Faculty = require('../../models/faculty.model');

module.exports = (response) => {
    Faculty.findAll().then(faculties => {
        response.json(JSON.stringify(faculties))
    }).catch(e => {response.json(JSON.stringify({error: e.message}))})
}

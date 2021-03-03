const Faculty = require('../../models/faculty.model');

module.exports = (response) => {
    Faculty.findAll().then(faculties => {
        response.end(JSON.stringify(faculties))
    }).catch(e => {response.end(JSON.stringify({error: e.message}))})
}

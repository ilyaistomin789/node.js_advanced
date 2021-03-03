const Faculty = require('../../models/faculty.model');

module.exports = (value,response) => {
    Faculty.update({FACULTY_NAME: value.FACULTY_NAME},{where: {FACULTY: value.FACULTY}})
        .then(item => {response.send(`Updated rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

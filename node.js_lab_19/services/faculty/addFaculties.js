const Faculty = require('../../models/faculty.model');

module.exports = (value,response) => {
    Faculty.create({FACULTY: value.FACULTY, FACULTY_NAME: value.FACULTY_NAME})
        .then(item => {response.json(JSON.stringify(item.dataValues))})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})

}

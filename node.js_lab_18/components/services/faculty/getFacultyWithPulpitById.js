const Faculty = require('../../models/faculty.model');
const Pulpit = require('../../models/pulpit.model');
module.exports = (id,response) => {
    Faculty.findOne({
        include: [{
            model: Pulpit,
            as: 'faculty_pulpits', required: true
        }],
        where: {FACULTY: id}
    }).then(faculty => response.end(JSON.stringify(faculty))).catch(e => {response.end(JSON.stringify({error: e.message}))})
}

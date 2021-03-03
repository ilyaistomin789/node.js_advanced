const Faculty = require('../../models/faculty.model');
const Teacher = require('../../models/teacher.model');
const Pulpit = require('../../models/pulpit.model');
module.exports = (id,response) => {
    Faculty.findOne({
        include: [{
            model: Pulpit,
            as: 'faculty_pulpits', required: true,
            include: [{
                model: Teacher,
                as: 'pulpit_teachers', required: true
            }]
        }],
        where: {FACULTY: id}
    }).then(faculty => {
        response.json(JSON.stringify(faculty));
    }).catch(e => {response.json(JSON.stringify({error: e.message}));})
}

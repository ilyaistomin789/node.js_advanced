const Subject = require('../../models/subject.model');

module.exports = (value,response) => {
    Subject.create({SUBJECT: value.SUBJECT, SUBJECT_NAME: value.SUBJECT_NAME, PULPIT: value.PULPIT })
        .then(item => {response.json(JSON.stringify(item.dataValues))})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

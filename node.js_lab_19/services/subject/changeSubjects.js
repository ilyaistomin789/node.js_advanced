const Subject = require('../../models/subject.model');

module.exports = (value,response) => {
    Subject.update({SUBJECT_NAME: value.SUBJECT_NAME, PULPIT: value.PULPIT}, {where: {SUBJECT: value.SUBJECT}})
        .then(item => {response.send(`Updated rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

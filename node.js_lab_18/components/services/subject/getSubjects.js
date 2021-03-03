const Subject = require('../../models/subject.model');

module.exports = (response) => {
    Subject.findAll().then(subjects => {
        response.end(JSON.stringify(subjects));
    }).catch(e => {response.end(JSON.stringify({error: e.message}));})
}

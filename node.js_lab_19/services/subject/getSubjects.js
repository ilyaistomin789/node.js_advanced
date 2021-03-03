const Subject = require('../../models/subject.model');

module.exports = (response) => {
    Subject.findAll().then(subjects => {
        response.json(JSON.stringify(subjects));
    }).catch(e => {response.json(JSON.stringify({error: e.message}));})
}

const Subject = require('../../models/subject.model');

module.exports = (id,response) => {
    Subject.destroy({where: {SUBJECT: id}})
        .then(item => {response.json(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.json(JSON.stringify({error: e.message}));})
}

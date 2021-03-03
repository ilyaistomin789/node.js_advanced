const Subject = require('../../models/subject.model');

module.exports = (id,request,response) => {
    Subject.destroy({where: {SUBJECT: id}})
        .then(item => {response.end(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.end(JSON.stringify({error: e.message}));})
}

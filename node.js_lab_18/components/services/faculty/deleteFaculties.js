const Faculty = require('../../models/faculty.model');

module.exports = (id,request,response) => {
    Faculty.destroy({where: {FACULTY: id}})
        .then(item => {response.end(`Deleted rows: ${JSON.stringify(item)}`)})
        .catch(e => {response.end(JSON.stringify({error: e.message}));})
}

const Faculty = require('../../models/faculty.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Faculty.update({FACULTY_NAME: data_json.FACULTY_NAME},{where: {FACULTY: data_json.FACULTY}})
            .then(item => {response.end(`Updated rows: ${JSON.stringify(item)}`)})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })
}

const Faculty = require('../../models/faculty.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Faculty.create({FACULTY: data_json.FACULTY, FACULTY_NAME: data_json.FACULTY_NAME})
            .then(item => {response.end(JSON.stringify(item.dataValues))})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

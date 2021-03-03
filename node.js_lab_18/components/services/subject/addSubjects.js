const Subject = require('../../models/subject.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Subject.create({SUBJECT: data_json.SUBJECT, SUBJECT_NAME: data_json.SUBJECT_NAME, PULPIT: data_json.PULPIT })
            .then(item => {response.end(JSON.stringify(item.dataValues))})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

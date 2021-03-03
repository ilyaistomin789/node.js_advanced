const Subject = require('../../models/subject.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Subject.update({SUBJECT_NAME: data_json.SUBJECT_NAME, PULPIT: data_json.PULPIT}, {where: {SUBJECT: data_json.SUBJECT}})
            .then(item => {response.end(`Updated rows: ${JSON.stringify(item)}`)})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

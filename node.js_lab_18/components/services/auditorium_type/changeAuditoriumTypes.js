const AuditoriumType = require('../../models/auditorium_type.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        AuditoriumType.update({AUDITORIUM_TYPE: data_json.AUDITORIUM_TYPE}, {where: {AUDITORIUM_TYPENAME: data_json.AUDITORIUM_TYPENAME}})
            .then(item => {response.end(`Updated rows: ${JSON.stringify(item)}`)})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

const Auditorium = require('../../models/auditorium.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Auditorium.update({AUDITORIUM_TYPE: data_json.AUDITORIUM_TYPE, AUDITORIUM_CAPACITY: data_json.AUDITORIUM_CAPACITY, AUDITORIUM_NAME: data_json.AUDITORIUM_NAME },
            {where: {AUDITORIUM: data_json.AUDITORIUM}})
            .then(item => {response.end(`Updated rows: ${JSON.stringify(item)}`)})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

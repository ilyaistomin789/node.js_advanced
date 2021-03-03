const Auditorium = require('../../models/auditorium.model');

module.exports = (request,response) => {
    let data = '';
    request.on('data', (d) => {
        data += d;
    })

    request.on('end' ,() => {
        console.log(data);
        const data_json = JSON.parse(data);
        Auditorium.create({AUDITORIUM: data_json.AUDITORIUM, AUDITORIUM_TYPE: data_json.AUDITORIUM_TYPE, AUDITORIUM_CAPACITY: data_json.AUDITORIUM_CAPACITY, AUDITORIUM_NAME: data_json.AUDITORIUM_NAME })
            .then(item => {response.end(JSON.stringify(item.dataValues))})
            .catch(e => {response.end(JSON.stringify({error: e.message}));})
    })

}

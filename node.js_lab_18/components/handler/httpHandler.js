const url = require('url');

const getHtml = require('../services/getHtml');
const getAuditoriums = require('../services/auditorium/getAuditoriums');
const getAuditoriumTypes = require('../services/auditorium_type/getAuditoriumTypes');
const getFaculties = require('../services/faculty/getFaculties');
const getPulpits = require('../services/pulpit/getPulpits');
const getSubjects = require('../services/subject/getSubjects');
const getFacultyWithPulpitById = require('../services/faculty/getFacultyWithPulpitById');
const getFacultyWithTeachersById = require('../services/faculty/getFacultyWithTeachersById');
const getAuditoriumsGt60 = require('../services/auditorium/getAuditoriumsGt60');

const addFaculties = require('../services/faculty/addFaculties');
const addPulpits = require('../services/pulpit/addPulpits');
const addSubjects = require('../services/subject/addSubjects');
const addAuditoriumTypes = require('../services/auditorium_type/addAuditoriumTypes');
const addAuditoriums = require('../services/auditorium/addAuditoriums');

const changeFaculties = require('../services/faculty/changeFaculties');
const changePulpits = require('../services/pulpit/changePulpits');
const changeSubjects = require('../services/subject/changeSubjects');
const changeAuditoriumTypes = require('../services/auditorium_type/changeAuditoriumTypes')
const changeAuditoriums = require('../services/auditorium/changeAuditoriums');

const deleteFaculties = require('../services/faculty/deleteFaculties');
const deletePulpits = require('../services/pulpit/deletePulpits');
const deleteSubjects = require('../services/subject/deleteSubjects');
const deleteAuditoriumTypes = require('../services/auditorium_type/deleteAuditoriumTypes')
const deleteAuditoriums = require('../services/auditorium/deleteAuditoriums');

const handler = (req, res) => {
    const reqUrl = decodeURI(url.parse(req.url).pathname);
    switch (req.method){
        case 'GET': {
            let input  = /^\/(api)\/(faculties)\/([a-zA-Zа-яА-Я]*)\/((pulpits)|(teachers))$/.exec(reqUrl);
            input == null ? input = 'default' : input = input['input'];
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            switch (reqUrl){
                case '/api/auditoriums': getAuditoriums(res); break;
                case '/api/auditoriumstypes': getAuditoriumTypes(res); break;
                case '/api/faculties': getFaculties(res); break;
                case '/api/pulpits': getPulpits(res); break;
                case '/api/subjects': getSubjects(res); break;
                case '/api/faculties/ТОВ/pulpits': getFacultyWithPulpitById('ИТ',res); break;
                case '/api/auditoriumsgt60': getAuditoriumsGt60(res); break;
                case input: {
                    const id = input.split('/')[3];
                    const entity = input.split('/')[4];
                    entity === 'teachers' && getFacultyWithTeachersById(id,res);
                    entity === 'pulpits' && getFacultyWithPulpitById(id,res);
                }break;
                default:{
                    res.setHeader('Content-Type', 'text/html;charset=utf-8');
                    getHtml('./html.html',res);
                }

            }
        }break;
        case 'POST':{
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            switch (reqUrl){
                case '/api/faculties': addFaculties(req,res); break;
                case '/api/pulpits': addPulpits(req,res); break;
                case '/api/subjects': addSubjects(req,res); break;
                case '/api/auditoriumstypes': addAuditoriumTypes(req,res); break;
                case '/api/auditoriums': addAuditoriums(req,res); break;
                default:{
                    res.statusCode = 404;
                    res.statusMessage = 'Invalid url';
                    res.end(JSON.stringify(res.statusCode, res.statusMessage));
                }break;
            }
        }break;
        case 'PUT':{
            switch (reqUrl) {
                case '/api/faculties': changeFaculties(req,res); break;
                case '/api/pulpits': changePulpits(req,res); break;
                case '/api/subjects': changeSubjects(req,res); break;
                case '/api/auditoriumstypes': changeAuditoriumTypes(req,res); break;
                case '/api/auditoriums': changeAuditoriums(req,res); break;
                default:{
                    res.statusCode = 404;
                    res.statusMessage = 'Invalid url';
                    res.end(JSON.stringify(res.statusCode, res.statusMessage));
                }break;
            }
        }break;
        case 'DELETE':{
            let sub_url = reqUrl.replace(reqUrl.split('/')[3], '');
            sub_url = sub_url.slice(0,-1);
            const id = reqUrl.split('/')[3];
            if(typeof id === 'undefined') break;
            switch (sub_url) {
                case '/api/faculties': deleteFaculties(id,req,res); break;
                case '/api/pulpits': deletePulpits(id,req,res); break;
                case '/api/subjects': deleteSubjects(id,req,res); break;
                case '/api/auditoriumstypes': deleteAuditoriumTypes(id,req,res); break;
                case '/api/auditoriums': deleteAuditoriums(id,req,res); break;
                default:{
                    res.statusCode = 404;
                    res.statusMessage = 'Invalid url';
                    res.end(`${res.statusCode} ${res.statusMessage}`);
                }break;
            }
        }break;
        default:{
            res.statusCode = 404;
            res.statusMessage = 'Invalid http method';
            res.end(JSON.stringify(res.statusCode, res.statusMessage));
        }break;
    }
}
module.exports = {handler}

const addSubjects = require('../services/subject/addSubjects');
const changeSubjects = require('../services/subject/changeSubjects');
const deleteSubjects = require('../services/subject/deleteSubjects');
const getSubjects = require('../services/subject/getSubjects');

exports.addSubject = (req,res) => addSubjects(req.body,res);
exports.changeSubject = (req,res) => changeSubjects(req.body, res);
exports.deleteSubject = (req,res) => deleteSubjects(req.params.id,res);
exports.getSubject = (req,res) => getSubjects(res);

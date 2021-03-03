const addFaculties = require('../services/faculty/addFaculties');
const changeFaculties = require('../services/faculty/changeFaculties');
const deleteFaculties = require('../services/faculty/deleteFaculties');
const getFaculties = require('../services/faculty/getFaculties');
const getFacultyWithPulpitById = require('../services/faculty/getFacultyWithPulpitById');
const getFacultyWithTeachersById = require('../services/faculty/getFacultyWithTeachersById');

exports.addFaculty = (req,res) => addFaculties(req.body,res);
exports.changeFaculty = (req,res) => changeFaculties(req.body,res);
exports.deleteFaculty = (req,res) => deleteFaculties(req.params.id,res);
exports.getFaculty = (req,res) => getFaculties(res);
exports.getFacultyWithPulpitById = (req,res) => getFacultyWithPulpitById(req.params.id,res);
exports.getFacultyWithTeachersById = (req,res) => getFacultyWithTeachersById(req.params.id,res);

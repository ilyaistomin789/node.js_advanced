const addAuditoriumTypes = require('../services/auditorium_type/addAuditoriumTypes');
const changeAuditoriumTypes = require('../services/auditorium_type/changeAuditoriumTypes');
const deleteAuditoriumTypes = require('../services/auditorium_type/deleteAuditoriumTypes');
const getAuditoriumTypes = require('../services/auditorium_type/getAuditoriumTypes');

exports.addAuditoriumType = (req,res) => addAuditoriumTypes(req.body, res);
exports.changeAuditoriumType = (req,res) => changeAuditoriumTypes(req.body, res);
exports.deleteAuditoriumType = (req,res) => deleteAuditoriumTypes(req.params.id, res);
exports.getAuditoriumType = (req,res) => {getAuditoriumTypes(res)};

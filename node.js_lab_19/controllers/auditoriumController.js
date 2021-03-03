const addAuditoriums = require('../services/auditorium/addAuditoriums');
const changeAuditoriums = require('../services/auditorium/changeAuditoriums');
const deleteAuditoriums = require('../services/auditorium/deleteAuditoriums');
const getAuditoriums = require('../services/auditorium/getAuditoriums');
const getAuditoriumsGt60 = require('../services/auditorium/getAuditoriumsGt60');

exports.addAuditorium = (req, res) => addAuditoriums(req.body,res);
exports.changeAuditorium = (req,res) => {changeAuditoriums(req.body,res)};
exports.deleteAuditorium = (req,res) => {deleteAuditoriums(req.params.id,res)};
exports.getAuditorium = (req,res) => {getAuditoriums(res)};
exports.getAuditoriumGt60 = (req,res) => {getAuditoriumsGt60(res)};


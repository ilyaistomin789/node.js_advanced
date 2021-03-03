const addPulpits = require('../services/pulpit/addPulpits');
const changePulpits = require('../services/pulpit/changePulpits');
const deletePulpits = require('../services/pulpit/deletePulpits');
const getPulpits = require('../services/pulpit/getPulpits');

exports.addPulpit = (req,res) => addPulpits(req.body,res);
exports.changePulpit = (req,res) => changePulpits(req.body, res);
exports.deletePulpit = (req,res) => deletePulpits(req.params.id,res);
exports.getPulpit = (req,res) => getPulpits(res);

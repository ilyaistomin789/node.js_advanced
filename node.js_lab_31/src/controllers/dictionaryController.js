const GetDirectoryService = require('../services/getDirectoryService');
const AddTelephoneService = require('../services/addTelephoneService');
const UpdateTelephoneService = require('../services/updateTelephoneService');
const DeleteTelephoneService = require('../services/deleteTelephoneService');

exports.getDirectory = (req, res) => GetDirectoryService(req, res);
exports.addTelephone = (req, res) => AddTelephoneService(req, res);
exports.updateTelephone = (req, res) => UpdateTelephoneService(req, res);
exports.deleteTelephone = (req, res) => DeleteTelephoneService(req, res);

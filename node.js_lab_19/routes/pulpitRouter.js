const express = require('express');
const pulpitRouter = express.Router();
const pulpitController = require('../controllers/pulpitController');

pulpitRouter.get('/', pulpitController.getPulpit);
pulpitRouter.post('/', pulpitController.addPulpit);
pulpitRouter.put('/', pulpitController.changePulpit);
pulpitRouter.delete('/:id', pulpitController.deletePulpit);

module.exports = pulpitRouter;

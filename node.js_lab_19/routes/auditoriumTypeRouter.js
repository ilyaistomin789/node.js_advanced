const express = require('express');
const auditoriumTypeController = require('../controllers/auditoriumTypeController');
const auditoriumTypeRouter = express.Router();

auditoriumTypeRouter.get('/', auditoriumTypeController.getAuditoriumType);
auditoriumTypeRouter.post('/', auditoriumTypeController.addAuditoriumType);
auditoriumTypeRouter.put('/update', auditoriumTypeController.changeAuditoriumType);
auditoriumTypeRouter.delete('/:id', auditoriumTypeController.deleteAuditoriumType);

module.exports = auditoriumTypeRouter;

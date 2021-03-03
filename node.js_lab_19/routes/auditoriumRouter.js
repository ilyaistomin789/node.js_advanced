const express = require('express');
const auditoriumRouter = express.Router();
const auditoriumController = require('../controllers/auditoriumController');
auditoriumRouter.get('/', auditoriumController.getAuditorium);
auditoriumRouter.get('/get60', auditoriumController.getAuditoriumGt60);
auditoriumRouter.post('/', auditoriumController.addAuditorium);
auditoriumRouter.put('/', auditoriumController.changeAuditorium);
auditoriumRouter.delete('/:id', auditoriumController.deleteAuditorium);
module.exports = auditoriumRouter;

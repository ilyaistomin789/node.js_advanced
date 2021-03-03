const express = require('express');
const facultyRouter = express.Router();
const facultyController = require('../controllers/facultyController');

facultyRouter.get('/', facultyController.getFaculty);
facultyRouter.post('/', facultyController.addFaculty);
facultyRouter.put('/', facultyController.changeFaculty);
facultyRouter.delete('/:id', facultyController.deleteFaculty);
facultyRouter.get('/:id/teachers', facultyController.getFacultyWithTeachersById);
facultyRouter.get('/:id/pulpits', facultyController.getFacultyWithPulpitById);

module.exports = facultyRouter;

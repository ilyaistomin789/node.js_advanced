const express = require('express');
const subjectRouter = express.Router();
const subjectController = require('../controllers/subjectController');

subjectRouter.get('/', subjectController.getSubject);
subjectRouter.post('/', subjectController.addSubject);
subjectRouter.delete('/:id', subjectController.deleteSubject);
subjectRouter.put('/', subjectController.changeSubject);

module.exports = subjectRouter;

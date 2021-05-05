const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/userController');

router.get('/api/user', UserController.getUsers);
router.get('/api/user/:id', UserController.getUserById);

module.exports = router;

const { Router } = require('express');
const router = Router();
const AbilityController = require('../controllers/abilityController');

router.get('/api/ability', AbilityController.getAbilities);

module.exports = router;

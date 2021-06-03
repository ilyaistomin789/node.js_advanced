const {Router} = require('express');
const DictionaryController = require('../controllers/dictionaryController');

const router = Router();

router.get('/TS', DictionaryController.getDirectory);
router.post('/TS', DictionaryController.addTelephone);
router.put('/TS', DictionaryController.updateTelephone);
router.delete('/TS', DictionaryController.deleteTelephone);

module.exports = router;

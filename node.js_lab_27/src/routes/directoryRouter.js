const {Router} = require('express');
const router = Router();
const DirectoryController = require('../controllers/directoryController');

router.post('/md/:directoryName', DirectoryController.createDirectory);
router.post('/rd/:directoryName', DirectoryController.remoteDirectory);
router.post('/up/:fileName', DirectoryController.uploadFile);
router.post('/down/:fileName', DirectoryController.downloadFile);
router.post('/del/:fileName', DirectoryController.deleteFile);
router.post('/copy/:fileName/:toFileName', DirectoryController.copyFile);
router.post('/move/:fileName/:toFileName', DirectoryController.moveFile);

module.exports = router;

const { Router } = require('express');
const router = Router();
const repoController = require('../controllers/repoController');

router.get('/api/repos', repoController.getRepos);
router.post('/api/repos', repoController.setRepo);
router.put('/api/repos/:id', repoController.editById);
router.delete('/api/repos/:id', repoController.deleteRepo);
router.get('/api/repos/:id/commits', repoController.getReposWithCommitsById);
router.get('/api/repos/:id/commits/:commitId', repoController.getReposWithCommitsByIds);
router.post('/api/repos/:id/commits', repoController.setCommitByRepoId);
router.put('/api/repos/:id/commits/:commitId', repoController.editCommitByRepoId);
router.delete('/api/repos/:id/commits/:commitId', repoController.deleteCommitByRepoId);

module.exports = router;

const Repo = require('../models/repo.model');
const Commit = require('../models/commit.model');

exports.getRepos = async (req, res) => {
    const repos = await Repo.findAll({ raw: true });
    console.log(repos);
    req.ability.throwUnlessCan("read", "repos");
    repos !== null ? res.json(repos) : res.json({ message: 'repos not found' });
}

exports.setRepo = async (req, res) => {
    const repo = new Repo({
        name: req.body.name,
        authorId: req.body.authorId
    })
    req.ability.throwUnlessCan("create", repo);
    await repo.save()
        .then(() => { res.json({ message: 'Adding the repository was successful' }) })
        .catch(e => res.json({ message: e.message }))
}

exports.editById = async (req, res) => {
    const id = req.params.id;
    const repo = await Repo.findOne({where: { id: id }});
    req.ability.throwUnlessCan("update", repo);
    repo.name = req.body.name;
    repo.authorId = req.body.authorId;
    await repo.save()
        .then(() => res.json({ message: 'Editing the repository was successful' }))
        .catch(e => res.json({ message: e.message }));
}

exports.deleteRepo = async (req, res) => {
    const id = req.params.id;
    const repo = await Repo.findOne({where: { id: id } });
    req.ability.throwUnlessCan("delete", repo);
    await repo.destroy()
        .then(() => res.json({ message: 'The repository was deleted' }))
        .catch(e => res.json(e => res.json({ message : e.message })));
}

exports.getReposWithCommitsById = async (req, res) => {
    const id = req.params.id;
    const repoCommits = await Commit.findAll({
        where: { repoId: id }
    })
    req.ability.throwUnlessCan("read", "commits");
    res.json(repoCommits);
}

exports.getReposWithCommitsByIds = async (req, res) => {
    const id = req.params.id;
    const commitId = req.params.commitId;
    const repoCommit = await Repo.findOne({
        where: { id: id },
        include: [{
            model: Commit,
            where: { id: commitId }
        }]
    })
    req.ability.throwUnlessCan("read", repoCommit);
    res.json(repoCommit);
}

exports.setCommitByRepoId = async (req, res) => {
    const id = req.params.id;
    const commit = new Commit({
        repoId: id,
        message: req.body.message
    })
    req.ability.throwUnlessCan("create", commit);
    await commit.save()
        .then(() => res.json({ message: `Adding the commit for repo id ${id} was successful` }))
        .catch(e => res.json({ message: e.message }));
}

exports.editCommitByRepoId = async (req, res) => {
    const id = req.params.id;
    const commitId = req.params.commitId;
    const repoCommit = await Commit.findOne({where: {
            repoId: id,
            id: commitId
        }})
    req.ability.throwUnlessCan("update", repoCommit);
    repoCommit.update({message: req.body.message})
        .then(() => res.json({ message: `Editing the commit for repo id ${id} was successful` }))
        .catch(e => res.json({ message: e.message }));

}

exports.deleteCommitByRepoId = async (req, res) => {
    const id = req.params.id;
    const commitId = req.params.commitId;
    const commit = await Commit.findOne({where: {
            repoId: id,
            id: commitId
        }})
    req.ability.throwUnlessCan("delete", commit);
    await commit.destroy()
        .then(() => res.json({ message: `Deleting the commit for repo id ${id} was successful` }))
        .catch(e => res.json({ message: e.message }));
}

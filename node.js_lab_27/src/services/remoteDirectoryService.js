const webDavClient = require('../model/webdav.model')

module.exports = (req, res) => {
    const dirPath = '/' + req.params.directoryName;
    webDavClient.exists(dirPath)
        .then(alreadyExists => {
            if (alreadyExists) {
                return webDavClient.deleteFile(dirPath).then(() => ({message: 'Directory\'s been removed'}));
            } else {
                res.status(404);
                return {error: 'There is no such folder'};
            }
        })
        .then(message => res.json(message))
        .catch(err => res.status(400).json({error: err.toString()}));
}

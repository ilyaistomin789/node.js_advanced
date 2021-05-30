const webDavClient = require('../model/webdav.model');

module.exports = (req, res) => {
    const filePath = '/' + req.params.fileName;
    webDavClient.exists(filePath)
        .then(alreadyExists => {
            if (alreadyExists) {
                return webDavClient.deleteFile(filePath).then(() => ({message: 'File\'s been removed'}));
            } else {
                res.status(404);
                return {error: 'There is no such file'};
            }
        })
        .then(message => res.json(message))
        .catch(err => res.status(400).json({error: err.toString()}));
}

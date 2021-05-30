const webDavClient = require('../model/webdav.model');

module.exports = (req, res) => {
    const {directoryName} = req.params;

    webDavClient
        .exists(directoryName)
        .then(alreadyExists => {
            if (alreadyExists) {
                res.status(408);
                return {error: 'Such directory already exists'};
            } else {
                return webDavClient.createDirectory(directoryName).then(() => ({message: 'Directory\'s been created'}));
            }
        })
        .then(message => res.json(message))
        .catch(err => res.status(400).json({error: err.toString()}));
}


const webDavClient = require('../model/webdav.model');

module.exports = (req, res) => {
    const sourceFilePath = '/' + req.params.fileName;
    const destinationFilePath = '/' + req.params.toFileName;
    webDavClient.exists(sourceFilePath)
        .then(alreadyExists => {
            if (alreadyExists) {
                return webDavClient.copyFile(sourceFilePath, destinationFilePath).then(() => ({message: 'File\'s been copied'}));
            } else {
                res.status(404);
                return {error: 'There is no such source file'};
            }
        })
        .then(message => res.json(message))
        .catch(err => res.status(400).json({error: err.toString()}));
}

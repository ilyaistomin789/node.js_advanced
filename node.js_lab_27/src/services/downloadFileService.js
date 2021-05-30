const webDavClient = require('../model/webdav.model');
const fs = require('fs');

module.exports = (req, res) => {
    const filePath = '/' + req.params.fileName;
    webDavClient.exists(filePath)
        .then(alreadyExists => {
            if (alreadyExists) {
                let rs = webDavClient.createReadStream(filePath);
                let ws = fs.createWriteStream('./src/files/' + Date.now() + req.params.fileName);
                rs.pipe(ws);
                rs.pipe(res);
                res.json({message: 'File\'s been downloaded'});
            } else {
                res.status(404);
                return {error: 'There is no such file'};
            }
        })
        .then(message => message ? res.json(message) : null)
        .catch(err => res.status(400).json({error: err.toString()}));
}

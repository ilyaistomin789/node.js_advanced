const webDavClient = require('../model/webdav.model');
const fs = require('fs');

module.exports = (req, res) => {
    try {
        const filePath = './src/files/' + req.params.fileName;
        let rs = fs.createReadStream(filePath);
        let ws = webDavClient.createWriteStream(req.params.fileName);
        rs.pipe(ws);
        res.json({message: 'File\'s been uploaded'});
    } catch (err) {
        res.status(408).json({error: err.toString()})
    }
}

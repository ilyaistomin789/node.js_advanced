const path = require('path');
const appDir = path.dirname(require.main.filename);
const getLoginPage = (req, res) => {
    res.sendFile(path.join(appDir, '/components/login.html'));
}
const resource = (req, res) => {
    req.user && res.status(200).send('resource');
}

module.exports = { getLoginPage, resource }

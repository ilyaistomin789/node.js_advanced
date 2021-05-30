const webDav = require('webdav');
const config = require('../config/config');
const webDavClient = webDav.createClient(config.REMOTE_URL, {
    username: config.WEBDAV_NAME,
    password: config.WEBDAV_PASSWORD
})

module.exports = webDavClient;

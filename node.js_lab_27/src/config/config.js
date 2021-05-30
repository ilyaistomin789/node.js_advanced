const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../../.env'),
});

module.exports = {
    PORT: process.env.PORT,
    REMOTE_URL: process.env.REMOTE_URL,
    WEBDAV_NAME: process.env.WEBDAV_NAME,
    WEBDAV_PASSWORD: process.env.WEBDAV_PASSWORD,
};

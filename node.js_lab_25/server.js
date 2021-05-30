const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();

const options = {
    key:  fs.readFileSync('./cert/stmnl.key'),
    cert: fs.readFileSync('./cert/stmnl.crt')
}
https.createServer(options, app).listen(5000);


app.get('/', (req, res) => {
    res.end('mess');
})


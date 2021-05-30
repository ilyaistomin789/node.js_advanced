const express = require('express');
const fs = require('fs');
const ServerSign = require('./serverSign');

const app = express();

app.use(require('body-parser').json());

const sendSignature = (req, res) => {
    const text = fs.createReadStream(`${__dirname}/file.txt`);
    const ss = new ServerSign();

    ss.getSignContext(text, (signContext) => {
        res.json({
            file: text,
            sign: signContext,
        });
    });
}

app.get('/signature', sendSignature);

app.listen(5000);

const express = require('express');
const ServerDH = require('./serverDH');
const fs = require("fs");
const crypto = require('crypto');

let serverDH;
const app = express();
app.use(require('body-parser').json());

const calculatingSessionKey = (req, res) => {
    serverDH = new ServerDH(1024, 3);
    const serverContext = serverDH.getContext();
    res.json(serverContext);
}

const sendEncryptText = (req, res) => {
    const {p_hex, g_hex, key_hex} = req.body;
    if (serverDH && p_hex && g_hex && key_hex) {
        const serverSecret = serverDH.getSecret(key_hex);

        const cipher = crypto.createCipher("aes256", serverSecret.toString());
        const text = fs.readFileSync(`${__dirname}\\file.txt`, {encoding: "utf8"});
        console.log("file data ", text);
        const encrypted = cipher.update(text, "utf8", "hex") + cipher.final("hex");

        res.json({txt: encrypted});
    } else {
        return res.sendStatus(409);
    }
}

app.get('/', calculatingSessionKey);
app.get('/resource', sendEncryptText);

app.listen(5000);

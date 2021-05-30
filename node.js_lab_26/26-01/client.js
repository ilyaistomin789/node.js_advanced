const express = require('express');
const app = express();
const request = require('request-promise');
const ClientDH = require('./clientDH');
const fs = require('fs');
const crypto = require('crypto');


const saveDecryptText = (clientSecret, text) => {
    const decipher = crypto.createDecipher(
        "aes256",
        clientSecret.toString()
    );
    const decrypted =
        decipher.update(text, "hex", "utf8") + decipher.final("utf8");
    fs.writeFileSync("Decrypt.txt", decrypted);
    console.log(`Decrypted text: ${decrypted}`);
}

const getEncryptText = (response, clientSecret) => {
    const {txt} = response;
    const text = txt.toString('utf-8')
    console.log(`Encrypted text: ${text}`);

    saveDecryptText(clientSecret, text);
}


const getResource = (response) => {
    if (response) {
        const clientDH = new ClientDH(response);
        const clientSecret = clientDH.getSecret(response);
        const clientContext = clientDH.getContext();
        console.log(clientContext);
        request({
            method: "GET",
            uri: "http://localhost:5000/resource",
            body: clientContext,
            json: true
        })
            .then(response => getEncryptText(response, clientSecret))
    }
}


const sendRequest = async () => {
    await request({
        method: 'GET',
        uri: 'http://localhost:5000/',
        json: true
    })
        .then(response => getResource(response))
}

app.listen(3000, sendRequest);

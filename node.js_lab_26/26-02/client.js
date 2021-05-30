const express = require('express');
const app = express();
const request = require('request-promise');
const fs = require('fs');
const crypto = require('crypto');
const ClientVerify = require('./clientVerify');


const verifySignature = (signature, text) => {
    let cv = new ClientVerify();
    cv.verify(signature, text, result => {
        if (result) {
            console.log('Signature verified');
        } else {
            console.log("Signature not verified");
        }
    });
}
const getSignature = (response) => {
    const {sign, file} = response;
    const text = fs.createReadStream(`${__dirname}/fileC.txt`);
    let data = "";
    text.on("data", (chunk) => {
        data += chunk.toString();
    });
    verifySignature(sign, text);
}

const sendRequest = async () => {
    await request({
        method: "GET",
        uri: "http://localhost:5000/signature",
        json: true
    })
        .then(response => getSignature(response))
}

app.listen(3000, sendRequest);

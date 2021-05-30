const express = require('express');

const app = express();

const wasmCode = new Uint8Array(
    [0,97,115,109,1,0,0,0,1,135,128,128,128,0,1,96,2,127,127,1,
        127,3,132,128,128,128,0,3,0,0,0,4,132,128,128,128,0,1,112,
        0,0,5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,156,
        128,128,128,0,4,6,109,101,109,111,114,121,2,0,3,115,117,109,
        0,0,3,115,117,98,0,1,3,109,117,108,0,2,10,165,128,128,128,0,
        3,135,128,128,128,0,0,32,1,32,0,106,11,135,128,128,128,0,0,32,
        0,32,1,107,11,135,128,128,128,0,0,32,1,32,0,108,11]
);
let wasmModule = new WebAssembly.Module(wasmCode);
let wasmInstance = new WebAssembly.Instance(wasmModule, {});

app.use('/', express.static('public'));
app.get('/wasm', (req, res) => res.sendFile('./pages/servHTML.html', {root: __dirname}));

app.get('/03', (req, res, next) => res.type('html')
    .send(`
        sum: ${wasmInstance.exports.sum(2, 3)} 
        <br> mul: ${wasmInstance.exports.mul(2, 3)} 
        <br> sub: ${wasmInstance.exports.sub(2, 3)}`))

app.listen(3000)

const crypto = require("crypto");
let prKey, pubKey, s;

function serverSign() {
    const {privateKey, publicKey} = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {type: "pkcs1", format: "pem"},
        privateKeyEncoding: {type: "pkcs1", format: "pem"},
    });

    prKey = privateKey;
    pubKey = publicKey;

    s = crypto.createSign("SHA256");

    this.getSignContext = (rs, cb) => {
        rs.pipe(s);
        rs.on("end", () => {
            cb({
                signature: s.sign(prKey).toString("hex"),
                publicKey: pubKey.toString("hex"),
            });
        });
    }
}

module.exports = serverSign;

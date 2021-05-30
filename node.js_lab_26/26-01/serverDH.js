const crypto = require("crypto");
let dh, p, gb, k;

function serverDH(aLen, g) {
    dh = crypto.createDiffieHellman(aLen, g);
    p = dh.getPrime();
    gb = dh.getGenerator();
    k = dh.generateKeys();
    this.getContext = () => {
        return {
            p_hex: p.toString("hex"),
            g_hex: gb.toString("hex"),
            key_hex: k.toString("hex"),
        };
    }

    this.getSecret = (key_hex) => {
        const ke = Buffer.from(key_hex, "hex");
        return dh.computeSecret(ke);
    }
}

module.exports = serverDH;

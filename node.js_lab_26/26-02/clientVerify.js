const crypto = require("crypto");
let v;

function clientVerify() {
    v = crypto.createVerify("SHA256");

    this.verify = (signContext, rs, cb) => {
        rs.pipe(v);
        rs.on("end", () => {
            cb(v.verify(signContext.publicKey, signContext.signature, "hex"));
        });
    }
}

module.exports = clientVerify;

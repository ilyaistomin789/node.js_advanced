const fs = require('fs');

const read = (path) => {
    return fs.readFileSync(path).toString();
}


const save = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = {read, save};

const fs = require('fs');

module.exports = (path, response) => {
    try{
        response.end(fs.readFileSync(path));
    }catch (e){
        response.end(JSON.stringify({error: e.message}));
    }
}

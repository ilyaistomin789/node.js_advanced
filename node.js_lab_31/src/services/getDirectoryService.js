const fs = require('fs');
const dictionary = JSON.parse(fs.readFileSync('./models/dictionary.model.json'));

module.exports = (req, res) => res.json(dictionary);

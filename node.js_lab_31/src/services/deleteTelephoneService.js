const fs = require('fs');
let dictionary = JSON.parse(fs.readFileSync('./models/dictionary.model.json'));

module.exports = (req, res) => {
    const {id} = req.body;
    dictionary = dictionary.filter(telephone => telephone.id !== id);
    fs.writeFileSync('./models/dictionary.model.json', JSON.stringify(dictionary));
    return res.json('Telephone deleted successfully.' + 'Dictionary Length: ' + dictionary.length);
}

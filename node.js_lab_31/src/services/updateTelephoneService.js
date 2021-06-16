const fs = require('fs');
const dictionary = JSON.parse(fs.readFileSync('./models/dictionary.model.json'));

module.exports = (req, res) => {
    const {id, name, telephone} = req.body;
    let item = dictionary.find(element => element.id === id);
    if (item !== []) {
        item.name = name;
        item.telephone = telephone;
        fs.writeFileSync('./models/dictionary.model.json', JSON.stringify(dictionary));
        return res.json('Telephone updated successfully');
    }

    return res.sendStatus(404);
}

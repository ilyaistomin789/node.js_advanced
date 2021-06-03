const dictionary = require('../models/dictionary.model');

module.exports = (req, res) => {
    const {id, name, telephone} = req.body;
    let item = dictionary.find(element => element.id === id);
    if (item !== []) {
        item.name = name;
        item.telephone = telephone;
        return res.json('Telephone updated successfully');
    }

    return res.sendStatus(404);
}

const fs = require('fs');
const dictionary = JSON.parse(fs.readFileSync('./models/dictionary.model.json'));
module.exports = (req, res) => {
    const {id, name, telephone} = req.body;
    if (!dictionary.some(telephone => telephone.id === id)){
        dictionary.push({id, name, telephone});
        fs.writeFileSync('./models/dictionary.model.json', JSON.stringify(dictionary));
        return res.json({message: 'Telephone added successfully'});
    } else {
        return res.sendStatus(409);
    }
}


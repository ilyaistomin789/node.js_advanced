const dictionary = require('../models/dictionary.model');

module.exports = (req, res) => {
    const {id, name, telephone} = req.body;
    if (!dictionary.some(telephone => telephone.id === id)){
        dictionary.push(id,name,telephone);
        return res.json({message: 'Telephone added successfully'});
    } else {
        return res.sendStatus(401);
    }
}

let dictionary = require('../models/dictionary.model');

module.exports = (req, res) => {
    const {id} = req.body;
    dictionary = dictionary.filter(telephone => telephone.id !== id);
    return res.json('Telephone deleted successfully');
}

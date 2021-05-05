const User = require('../models/user.model');

exports.getUsers = async (req, res) => {
    const users = await User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    req.ability.throwUnlessCan("manage", "all");
    res.json(users);
}
exports.getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id }, attributes: { exclude: ['password'] } });
    req.ability.throwUnlessCan("read", user);
    res.json(user);
}

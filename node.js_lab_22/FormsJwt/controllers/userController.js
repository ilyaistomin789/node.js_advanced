const User = require('../models/users.model');
const uuid = require('uuid');


exports.addUser = (username, password) => {
    User.create({ID: uuid.v4().toString(), USERNAME: username, PASSWORD: password})
        .then(value => {
            console.log(value)})
        .catch(e => {
            console.log(e.message)});
}
exports.findUser = async (username, password) => {
    return await User.findOne({
        where: {
            USERNAME: username,
            PASSWORD: password
        }
    });


}

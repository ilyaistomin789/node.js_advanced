const User = require('../models/user.model');
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/login');
}
exports.loginPage = (req, res) => {
    res.render('login', {title: 'Login'});
}
exports.registerPage = (req, res) => {
    res.render('register', { title: 'Registration'});
}

exports.register = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
    })
    await user.save(user).catch(e => {
        console.log(e.message)});
    res.redirect('/');
    //TODO add logic

};

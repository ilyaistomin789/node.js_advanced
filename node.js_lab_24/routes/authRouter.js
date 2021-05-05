const { Router } = require('express');
const passport = require('passport');
const expressSession = require('express-session');
const AuthController = require('../controllers/authController');
const initializePassport = require('../passport-config');
const Users = require('../models/user.model');

initializePassport(
    passport,
    username => Users.findOne({ where: { username: username } }))

const router = Router();
router.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))

router.use(passport.initialize());
router.use(passport.session());

router.get('/login', AuthController.loginPage);
router.post('/login', (req, res, next) => {
    console.log(req.body);
    next();
});
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/register', AuthController.registerPage);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;

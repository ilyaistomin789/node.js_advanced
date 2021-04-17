const { Router } = require('express');
const router = Router();
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('../config/passport-config');
const AuthController = require('../controllers/authController');
const users = [];

router.use(session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true
}))
router.use(passport.initialize());
router.use(passport.session());


initializePassport(passport,
    item => users.push(item));

router.get('/login', AuthController.getLoginPage);
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/resource');
    }
);
router.get('/resource', AuthController.resource);
module.exports = router;

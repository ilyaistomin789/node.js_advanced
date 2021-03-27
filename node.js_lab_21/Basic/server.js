require('dotenv').config();
const express = require('express');
const users = require('../models/users.json');
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./passport-config');

const app = express();

app.use(express.urlencoded({extended: true}));
initializePassport(
    passport,
    name => users.find(user => user.name === name),
    id => users.find(user => user.id === id)
)

app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());


app.get('/login', (req, res, next) => {
    if (req.session.logout && req.headers['authorization']){
        req.session.logout = false;
        delete req.headers['authorization'];
    }
    next();
})
app.get('/login', passport.authenticate('basic'), (req, res, next) => {
    res.send(`Hello, ${req.user.name}`);
})

app.get('/resource', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('resource');
    } else {
        res.redirect('/login');
    }
})

app.get('/logout', (req, res, next) => {
    req.session.logout = true;
    res.redirect('/login');
})

app.get('*', (req, res, next) => {
    req.statusCode = 404;
    req.statusMessage = 'Cannot get resource';
    res.send(`Error ${req.statusCode}: ${req.statusMessage}`);
})

app.listen(3000);

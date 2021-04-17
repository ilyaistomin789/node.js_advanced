const redis = require('redis');
const jwt = require('jsonwebtoken');
const UserController = require('./userController');
const client = redis.createClient(process.env.REDIS_CONNECTION_STRING, { password: process.env.REDIS_PASSWORD});


const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
}
exports.registerPage = (req, res) => {
    res.render('register', { title: 'Registration'});
}
exports.register = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    UserController.addUser(username, password);
    res.redirect('/');
    //TODO add logic

};
let refreshTokens = [];
exports.loginToken = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = UserController.findUser(username, password);
    if (user === null) {
        return res.sendStatus(401).redirect('/login');
    } else {
        const user = { username: username };
        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        return res
            .cookie('Access-Token', accessToken, { httpOnly: true, sameSite: "strict" })
            .cookie('Refresh-Token', refreshToken, { path: '/' })
            .redirect('/resource');
    }
}
exports.refreshToken = (req, res) => {
    const refreshToken = req.cookies['Refresh-Token'];
    if (refreshToken == null) res.sendStatus(401);
    client.set('Refresh-Token', refreshToken);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        err && res.sendStatus(403);
        const accessToken = generateAccessToken({username: user.username});
        const refreshToken = jwt.sign({username: user.username}, process.env.REFRESH_TOKEN_SECRET);
        res
            .cookie('Access-Token', accessToken, { httpOnly: true, sameSite: "strict" })
            .cookie('Refresh-Token', refreshToken, { path: '/' })
            .redirect('/');
    });
}

exports.authenticateToken = (req, res, next) => {
    const token = req.cookies['Access-Token'];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        err && res.sendStatus(403);
        res.user = user;
        next();
    });

}
exports.logout = (req, res) => {
    res.clearCookie('Access-Token');
    res.clearCookie('Refresh-Token');
    res.statusCode = 204;
    res.redirect('/login');
}
exports.loginPage = (req, res) => {
    res.render('login', {title: 'Login'});
}
exports.resource = (req, res) => {
    res.send('resource');
}

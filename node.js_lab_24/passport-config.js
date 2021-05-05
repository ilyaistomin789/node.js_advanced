const LocalStrategy = require('passport-local').Strategy;

const initializePassport = (passport, getUserByUsername) => {
    const authenticateUser = async (username, password, done) => {
        const user = await getUserByUsername(username);
        if (user == null) return done(null, false, {message: 'This user does not exists'});
        if (user.password !== password) {
            return done(null, false, {message: 'Incorrect password'});
        } else {
            return done(null, user)
        }
    }
    passport.use(new LocalStrategy(authenticateUser));
    passport.serializeUser((user, done) => done(null,user));
    passport.deserializeUser((user, done) => done(null,user));
}
module.exports = initializePassport;

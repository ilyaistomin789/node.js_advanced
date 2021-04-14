require('dotenv').config();
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const initializePassport = (passport, pushData) => {
    const config = {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    }
    const verifyCallback = (
            accessToken,
            refreshToken,
            profile,
            done
    ) => {
        const data = { profile: profile, refreshToken: refreshToken };
        pushData(data);
        return done(null, data);
    }

    passport.use(new GoogleStrategy(config, verifyCallback));
    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((user, done) => done(null, user))
}

module.exports = initializePassport;

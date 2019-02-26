const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
const googleConsumerKey = require('../personal_data/google').googleConsumerKey;
const googleConsumerSecret = require('../personal_data/google').googleConsumerSecret;
const googleCallbackUri = require('../personal_data/google').googleCallbackUri;

const googleAuthStrategy = () => {
    passport.use(new GoogleStrategy({
        consumerKey: process.env.GOOGLE_CONSUMER_KEY || googleConsumerKey,
        consumerSecret: process.env.GOOGLE_CONSUMER_SECRET || googleConsumerSecret,
        callbackURL: process.env.GOOGLE_CALLBACK_URL || googleCallbackUri
    }, (token, tokenSecret, profile, done) => {
        done(null, profile);
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};

module.exports = googleAuthStrategy;
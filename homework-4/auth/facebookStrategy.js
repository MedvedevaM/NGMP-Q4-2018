const passport = require('passport');
const Strategy = require('passport-facebook');
const facebookClientId = require('../personal_data/facebook').facebookClientId;
const facebookClientSecret = require('../personal_data/facebook').facebookClientSecret;
const facebookCallbackUri = require('../personal_data/facebook').facebookCallbackUri;

const facebookStrategy = () => {
    passport.use(new Strategy({
        clientID: process.env.FACEBOOK_APP_ID || facebookClientId,
        clientSecret: process.env.FACEBOOK_APP_SECRET || facebookClientSecret,
        callbackURL: process.env.FACEBOOK_CALLBACK_URI || facebookCallbackUri,
    }, (accessToken, refreshToken, profile, done) => {
        done(null, profile._json, accessToken);
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}


module.exports = facebookStrategy;
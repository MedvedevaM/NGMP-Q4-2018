const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

const googleAuthStrategy = () => passport.use(new GoogleStrategy({
    consumerKey: 'key',
    consumerSecret: 'secret',
    callbackURL: `http://localhost:${process.env.PORT || 8070}/auth/callback/google`,
}, (token, tokenSecret, profile, done) => {
    done(null, profile);
}));

module.exports = googleAuthStrategy;
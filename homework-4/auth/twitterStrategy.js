const passport = require('passport');
const Strategy = require('passport-twitter');

const twitterStrategy = () => passport.use(new Strategy({
    consumerKey: 'key',
    consumerSecret: 'secret',
    callbackURL: `http://localhost:${process.env.PORT || 8070}/auth/callback/twitter`,
}, (token, tokenSecret, profile, done) => {
    done(null, profile);
}));

module.exports = twitterStrategy;
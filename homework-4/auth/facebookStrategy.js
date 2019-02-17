const passport = require('passport');
const Strategy = require('passport-facebook');

const facebookStrategy = () => passport.use(new Strategy({
    clientID: 'id',
    clientSecret: 'secret',
    callbackURL: `http://localhost:${process.env.PORT || 8070}/auth/callback/facebook`,
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));

module.exports = facebookStrategy;
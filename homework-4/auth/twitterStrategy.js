const passport = require('passport');
const Strategy = require('passport-twitter');
const twitterConsumerKey = require('../personal_data/google').twitterConsumerKey;
const twitterConsumerSecret = require('../personal_data/google').twitterConsumerSecret;
const twitterCallbackUri = require('../personal_data/google').twitterCallbackUri;

const twitterStrategy = () => {
    passport.use(new Strategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY || twitterConsumerKey,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET || twitterConsumerSecret,
        callbackURL: process.env.TWITTER_CALLBACK_URI || twitterCallbackUri,
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


module.exports = twitterStrategy;
const passport = require('passport');
const Strategy = require('passport-local');
const data = require('../fakeData/data');

const passportLocal = () => {
    passport.use(new Strategy({
        usernameField: 'login',
        passwordField: 'password',
        session: false
    }, (username, password, done) => {

        const user = data.users.find(user => user.email === username && user.password === password);
        if (user) {
            done(null, user)
        } else {
            done(null, false, { message: 'User not found or password incorrect' });
        } 
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};

module.exports = passportLocal;
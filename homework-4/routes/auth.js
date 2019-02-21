const express = require('express');
const passport = require('passport');
const login = require('../controllers/authControllers/loginController');
const logout = require('../controllers/authControllers/logoutController');
const googleRedirect = require('../controllers/authControllers/googleController');
const twitterRedirect = require('../controllers/authControllers/twitterController');
const facebookRedirect = require('../controllers/authControllers/facebookController');
const router = express.Router();

router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook'), facebookRedirect);


router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter'), twitterRedirect);


router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
}));

router.get('/google/callback', passport.authenticate('google'), googleRedirect);

module.exports = router;
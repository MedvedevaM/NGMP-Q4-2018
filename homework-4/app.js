const express = require('express');
const cookieParser = require('./middlewares/cookie-parser');
const queryParser = require('./middlewares/query-parser');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const expressSession = require('express-session');
const passport = require('passport');
const localAuthStrategy = require('./auth/localStrategy');
const facebookAuthStrategy = require('./auth/facebookStrategy');
const twitterStrategy = require('./auth/twitterStrategy');
const googleAuthStrategy = require('./auth/googleOAuthStrategy');

const app = express();

localAuthStrategy();
facebookAuthStrategy();
twitterStrategy();
googleAuthStrategy();

app.use(expressSession({
    name: 'server-session-cookie-id',
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
}));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser);
app.use(queryParser);
app.use('/', productRouter);
app.use('/', userRouter);
app.use('/', authRouter);

module.exports = { app };

const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');
const cookieParser = require('./middlewares/cookie-parser');
const queryParser = require('./middlewares/query-parser');
const router = require('./routes/router');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const localAuthStrategy = require('./auth/localStrategy');
const facebookAuthStrategy = require('./auth/facebookStrategy');
const twitterStrategy = require('./auth/twitterStrategy');
const googleAuthStrategy = require('./auth/googleOAuthStrategy');
const sequelize = require('./db/connect');

const app = express();


localAuthStrategy();
facebookAuthStrategy();
// twitterStrategy();
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

sequelize.sync().then(() => {
        router(app);
        productRouter(app);
        userRouter(app);
        app.use('/', authRouter);
    }
);

module.exports = { app };

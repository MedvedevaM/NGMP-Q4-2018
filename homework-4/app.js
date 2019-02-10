const express = require('express');
const cookieParser = require('./middlewares/cookie-parser');
const queryParser = require('./middlewares/query-parser'); 
const router = require('./routes/router');

const app = express();
app.use(cookieParser);
app.use(queryParser);
app.use('/', router);

module.exports = { app };

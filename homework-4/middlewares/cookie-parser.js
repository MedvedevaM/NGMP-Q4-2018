const cookie = require('cookie');

function cookieParser(req, res, next) {
    const cookies = req.headers.cookie;
    req.parsedCookies = cookies ? cookie.parse(cookies) : null;
    next();
}

module.exports = cookieParser;
const url = require('url');
const queryString = require('querystring');

function queryParser(req, res, next) {
    const { query } = url.parse(req.url);
    req.parsedQuery = query ? queryString.parse(query) : null;
    next();
}

module.exports = queryParser;
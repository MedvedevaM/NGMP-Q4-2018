const http = require('http');
const fs = require('fs');
const replace = require('stream-replace');
const port = 8080;

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    fs.createReadStream('./index.html')
        .pipe(replace('{message}', 'A message with a real message text'))
        .pipe(response);
});

server.listen(port);
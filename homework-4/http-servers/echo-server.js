const http = require('http');
const port = 8080;

const server = http.createServer((request, response) => {
    response.writeHead(200);
    response.pipe(response);
});

server.listen(port);


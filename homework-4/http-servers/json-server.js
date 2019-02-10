const http = require('http');
const port = 8081;

const product = {
	id: 1,
	name: 'Supreme T-Shirt',
	brand: 'Supreme',
	price: 99.99,
	options: [{
			color: 'blue'
		},
		{
			size: 'XL'
		},
	],
};

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(product));
});

server.listen(port);


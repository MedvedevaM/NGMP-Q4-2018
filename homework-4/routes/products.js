const data = require('../fakeData/data');
const jwtVerifier = require('../middlewares/jwtVerifier');

const router = app => {
    app.route('/api/products')
        .get(jwtVerifier, (req, res) => {
            console.log(req.parsedQuery);
            res.json(data.products);
        })
        .post(jwtVerifier, (req, res) => {
            data.products = [...data.products, req.body];
            res.json(req.body);
        });

    app.route('/api/products/:id')
        .get(jwtVerifier, (req, res) => {
            const product = data.products.filter(product => product.id === req.params.id);
            product === [] ? res.send({}) : res.json(product[0]);
        });
    
    app.route('/api/products/:id/reviews')
        .get(jwtVerifier, (req, res) => {
            const productReviews = data.reviews.filter(review => review.productId === req.params.id);
            res.json(productReviews);
        });
};

module.exports = router;
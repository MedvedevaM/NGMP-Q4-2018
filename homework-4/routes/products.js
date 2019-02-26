const jwtVerifier = require('../middlewares/jwtVerifier');
const getAll = require('../controllers/productsController').getAll;
const getOne = require('../controllers/productsController').getOne;
const create = require('../controllers/productsController').create;
const getReviews = require('../controllers/productsController').getReviews;

const router = app => {
    app.route('/api/products')
        .get(jwtVerifier, (req, res) => {
            getAll().then(products => res.send(products));
        })
        .post(jwtVerifier, (req, res) => {
            create(req.body).then(product => res.json(product));
        });

    app.route('/api/products/:id')
        .get(jwtVerifier, (req, res) => {
            getOne(req.params.id).then(product => res.send(product));
        });
    
    app.route('/api/products/:id/reviews')
        .get(jwtVerifier, (req, res) => {
            getReviews(req.params.id).then(reviews => res.send(reviews));
        });
};

module.exports = router;
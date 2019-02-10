const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK: true')
});

router.get('/api/products', (req, res) => {
    res.send('All products')
});

router.get('/api/products/:id', (req, res, next) => {
    res.send(`Product with id=${req.params.id}`);
    next();
});

router.get('/api/products/:id/reviews', (req, res, next) => {
    res.send(`Reviews for product with id=${req.params.id}`);
    next();
});

router.post('/api/products', (req, res) => {
    res.send(JSON.stringify(req.query));
});

router.get('/api/users', (req, res, next) => {
    res.send("All users");
    next();
});

module.exports = router;
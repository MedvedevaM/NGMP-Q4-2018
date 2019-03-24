const Product = require('../db/models/Products');
const router = app => {
    app.route('/api/products')
        .get((req, res) => {
            Product.find((err, result) => {
                res.send(result);
            });
        })
        .post((req, res) => {
            const newProduct = new Product({
                name: req.body.name
            });
            newProduct.save((err, result) => {
                console.log(err, result);
                res.send(err ? err : result);
            });
        });

    app.route('/api/products/:id')
        .get((req, res) => {
            Product.findById(req.params.id, (err, product) => {
                res.send(product ? product : `Product by id: ${req.params.id} is not found`);
            });
        })
        .delete((req, res) => {
            Product.deleteOne({ _id: req.params.id }, err => {
                res.send(err ? err : "OK");
            });
        });
};

module.exports = router;
const Users = require('../db/models/Users');
const Products = require('../db/models/Products');

const router = app => {
    app.route('/api/users')
        .get((req, res) => {
            Users.find((err, result) => {
                res.send(result);
            });
        })
        .post((req, res) => {
            create(req.body).then(user => res.json(user));
        });
    app.route('/api/users/:id')
        .get((req, res) => {
            Users.findByIdAndUpdate(req.params.id, req.body, { upsert: true }, (err, result) => {
                res.send(err ? err : result);
            });
        })
        .delete((req, res) => {
            Users.deleteOne({ _id: req.params.id }, (err) => {
                res.send(err ? err : "Success");
            });
        })
};

module.exports = router;
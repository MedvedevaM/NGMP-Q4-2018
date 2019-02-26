const jwtVerifier = require('../middlewares/jwtVerifier');
const getAll = require('../controllers/userController').getAll;
const getOne = require('../controllers/userController').getOne;
const create = require('../controllers/userController').create;

const router = app => {
    app.route('/api/users')
        .get(jwtVerifier, (req, res) => {
            getAll().then(users => res.send(users));
        })
        .post(jwtVerifier, (req, res) => {
            create(req.body).then(user => res.json(user));
        });
    app.route('/api/users/:id')
        .get(jwtVerifier, (req, res) => {
            getOne(req.params.id).then(user => res.send(user));
        });
};

module.exports = router;
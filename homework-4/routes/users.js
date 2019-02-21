const data = require('../fakeData/data');
const jwtVerifier = require('../middlewares/jwtVerifier');

const router = app => {
    app.route('/api/users')
        .get(jwtVerifier, (req, res) => {
            res.json(data.users);
        });
};


module.exports = router;
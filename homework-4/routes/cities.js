const City = require('../db/models/City');
const router = app => {
    app.route('/api/city')
        .get((req, res) => {
            City.countDocuments().exec((err, count) => {
                const random = Math.floor(Math.random() * count);
                City.findOne().skip(random).exec((err, result) => {
                    res.send(result);
                });
            });
        });
    app.route('/api/cities')
        .get((req, res) => {
            City.find((err, result) => {
                res.send(result);
            });
        })
        .post((req, res) => {
            const newCity = new City(req.body);
            newCity.save((err, result) => {
                res.send(result);
            });
        });
    app.route('/api/cities/:id')
        .put((req, res) => {
            City.findByIdAndUpdate(req.params.id, req.body, { upsert: true }, (err, result) => {
                res.send(err ? err : result);
            });
        })
        .delete((req, res) => {
            City.deleteOne({ _id: req.params.id }, (err) => {
                res.send(err ? err : "OK");
            });
        });
};

module.exports = router;
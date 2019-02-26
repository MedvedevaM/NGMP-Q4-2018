const router = app => {
    app.route('/')
        .get((req, res) => {
            res.send('OK: true')
        });
};

module.exports = router;
const express = require('express');
const router = express.Router();
const data = require('../fakeData/data');
const jwtVerifier = require('../middlewares/jwtVerifier');

router.get('/api/users', jwtVerifier, (req, res) => {
    res.json(data.users);
});


module.exports = router;
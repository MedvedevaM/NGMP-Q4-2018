const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK: true')
});

module.exports = router;
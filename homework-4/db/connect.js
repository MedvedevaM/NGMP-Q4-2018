const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodejs');

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connected successfully to server");
});

module.exports = db;

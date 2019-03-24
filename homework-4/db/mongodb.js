const MongoClient = require('mongodb').MongoClient;
const cities = require('../data/cities.json');

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('cities');
    collection.insertMany(cities, (err, result) => {
        console.log(result.ops);
        client.close();
    });
});

module.exports = MongoClient;
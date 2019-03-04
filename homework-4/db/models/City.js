const mongoose = require('mongoose');
const db = require('../connect');

const CitySchema = new mongoose.Schema({
    name: String,
    country: String,
    capital: Boolean,
    location: {
        lat: Number,
        long: Number
    },
    lastModifiedDate: Date
});

CitySchema.pre('save', next => {
    if (!this.lastModifiedDate) this.lastModifiedDate = new Date;
    next();
});

CitySchema.pre('findOneAndUpdate', next => {
    if (!this.lastModifiedDate) this.lastModifiedDate = new Date;
    next();
});

const City = db.model("City", CitySchema);

module.exports = City;
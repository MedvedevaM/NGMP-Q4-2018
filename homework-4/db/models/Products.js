const mongoose = require('mongoose');
const db = require('../connect');
const products = require('../../data/products.json');

const ProductSchema = new mongoose.Schema({
    name: String,
    lastModifiedDate: Date
});

ProductSchema.pre('save', function (next) {
    if (!this.lastModifiedDate) this.lastModifiedDate = new Date;
    next();
});

const Product = db.model("Product", ProductSchema);

Product.collection.insertMany(products, (err, res) => {
    console.log(err)
});

module.exports = Product;
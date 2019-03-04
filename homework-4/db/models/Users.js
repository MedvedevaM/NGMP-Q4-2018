const mongoose = require('mongoose');
const db = require('../connect');
const users = require('../../data/users.json');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    lastModifiedDate: Date
});

UserSchema.pre('save', next => {
    if (!this.lastModifiedDate) this.lastModifiedDate = new Date;
    next();
});

const User = db.model("User", UserSchema);

User.collection.insertMany(users, (err, r) => {
    console.log(err)
});

module.exports = User;
const mongoose = require('mongoose');
module.exports = mongoose.model('User', new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    adress: {
        street: String,
        suburb: String,
        cityi: String,
        state: String,
        zip: Number
    },
    email: String,
    password: String,
    phone: Number,
    userType: String
}), 'Users');
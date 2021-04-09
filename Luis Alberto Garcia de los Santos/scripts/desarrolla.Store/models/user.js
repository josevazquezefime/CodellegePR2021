const mongoose = require("mongoose");

//Generar nuestro propio modulo

module.exports = mongoose.model("User", new mongoose.Schema({
    nickname: String,
    name: String,
    lastName: String,
    address: {
        street: String,
        suburb: String,
        city: String,
        state: String,
        zip: String
    },
    email: String,
    password: String,
    phone: Number,
    userType: String
}), "Users");
    
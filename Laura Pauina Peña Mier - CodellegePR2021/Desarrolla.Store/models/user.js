const mongoose=require('mongoose');

//gENERAR NUESTRO PROPIO MODULO
module.exports=mongoose.model('User', new mongoose.Schema({
    idUser: String ,
    name: String,
    lastName: String,
    address: {
        street: String,
        suburb: String,
        city: String,
        state: String,
        zip: Number
    },
    email: String,
    password: String,
    phone: Number,
    userType: String
}), 'Users' );

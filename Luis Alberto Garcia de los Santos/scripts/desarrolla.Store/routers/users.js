const express = require("express");
const user = require("../models/user");
//Crea un enrutador para este micro-servicio
const router = express.Router();
//Importar nuestro modelo de datos
const User = require("../models/user")

router.get("/all", async (req, res) => {
    var users = await User.find({});

    res.send(users);
});

router.post("/register", async (req, res) =>{
    //El parametro "req" contiene rtoda la informacion que se envia para generar esta peticion
    //O sea, aqui vienen los datos
    var datosUsuario = req.body;

    //OR en el query de Mongo
    var userExists = await User.findOne({ $or: [{nickname: datosUsuario.nickname}, {email: datosUsuario.email}] });
    if(userExists){
       return res.status(400).send({
            error: "El usuario con este nickname/correo ya existe"
        });
    }

    var usuarioRegistrado = new User({
        nickname: datosUsuario.nickname,
        name: datosUsuario.name,
        lastName: datosUsuario.lastName,
        email: datosUsuario.email,
        password: datosUsuario.password
    });

    await usuarioRegistrado.save();
    res.send({
        message: "Usuario registrado correctamente"
    });
});

//Exportar o generar el modulo users.js
//Para ello debemos exportar aquello que contenga
module.exports = router;
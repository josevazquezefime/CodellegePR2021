const express = require("express");
const user = require("../models/user");
//Crea un enrutador para este micro-servicio
const router = express.Router();
//Importar nuestro modelo de datos
const User = require("../models/user")

router.get("/all", async (req, res) => {
    var users = await User.find({}, {
        __v: 0,
        _id: 0
    });

    res.send(users);
});


router.get("/nickname", async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;

    var user = await User.findOne({
        nickname: nickname
    }, {
        __v: 0,
        _id: 0,
        password: 0
    });
    //findOne puede regresar un null o el usuario
    if (!user) {
        return res.status(404).send({
            message: "El usuario: " + nickname + " no existe"
        });
    }

    return res.send(user);
});

router.post("/register", async (req, res) => {
    //El parametro "req" contiene rtoda la informacion que se envia para generar esta peticion
    //O sea, aqui vienen los datos
    var datosUsuario = req.body;

    //OR en el query de Mongo
    var userExists = await User.findOne({
        $or: [{
            nickname: datosUsuario.nickname
        }, {
            email: datosUsuario.email
        }]
    });
    if (userExists) {
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

router.put("/:nickname", async (req, res) => {

    const nickname = req.params.nickname;
    const userData = req.body;

    var user = await User.findOne({nickname: nickname});

    if (!user) {
        return res.status(404).send({
           message: "El usuario: " + nickname + " no eciste" 
        });
    }

    var propiedades = Object.keys()

    for (var i = 0; i < propiedades.length; i++) {
        const propiedade = propiedades[i];

        switch(propiedad) {
            case "name":
                user.name = userData.name
                break;

            case "lastName":
                user.lastName = userData.lastName
                break;
                
            case "phone":
                user.phone = userData.phone
                break;

            case "password":
                user.password = userData.password
                break;

            case "address":
                user.address = userData.address
                break;
        }
    }

    await user.save();

    res.send({
        message: "Se actualizo el suario correctamente" 
    });
});


router.delete("/:nickname", async (req, res) => {

    var parametros = req.params;
    var nickname = parametros.nickname;

    var usuarioBorrado = await User.deleteOne({
        nickname: nickname
    });

    res.send({
        message: "Se ha borrado el usuario: " + nickname
    });

});

//Exportar o generar el modulo users.js
//Para ello debemos exportar aquello que contenga
module.exports = router;
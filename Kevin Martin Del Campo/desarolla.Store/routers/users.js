//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const User = require('../models/user');

router.get('/all', async (req, res) => {
    var users = await User.find({});

    res.send(users);
});

router.post('/register', async (req, res) =>{
    //El parámetro 'req' contiene toda la información que se envía para generar esta petición
    //O sea, aquí vienen los datos
    var datosUsuario = req.body;

    var usuarioRegistrado = new User({
        nickname: datosUsuario.nickname,
        name: datosUsuario.name,
        lastName: datosUsuario.lastName,
        email: datosUsuario.email,
        password: datosUsuario.password
    });

    await usuarioRegistrado.save();
    res.send({
        message: 'Usuario registrado correctamente'
    });
});

//Exportar o generar el módulo users.js
//Para ello debemos exportar aquello que contenga a todo la información
module.exports = router;
// referencia del servidor de express
const express = require ('express');
//crear un enrutador para este micro-servicio
const router = express.Router ();
//importar nuestro modelo de datos 
const User = requite ('../models/user');

router.get('/all', async (req, res) => {
//router que regrese todos los usuarios 
var users =User.find({});

res.send (users); 
//lo regresa en las peticiones del servicio 
}); 

router.post('/register', async (req, res) =>{
//el parametro "req" contiene toda la infromacion que se envia para generar esta peticion 
// osea, aqui vienen los datos 
var datoUsuario =req.body;

var usuarioRgistrado = new User ({
    nickname: datosUsuario.nickname, 
    name: datosUsuario.name, 
    lastName: datosUsuario, lastName, 
    email: datosUsuario.email,
    password: datosUsuario.password
});
    await usuarioRegistrado.save();
    res.send({
        message: 'Usuario registrado correctamente'
    });
});

//esportar o generar el modulo users.js 
//para ello debemos exportar aquillo que contenga a toda la informacion 
module.exports =router; 

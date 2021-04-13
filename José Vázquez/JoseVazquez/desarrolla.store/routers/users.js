const express = require('express');
const router = express.Router();
const User = require('../models/user')
router.get('/all', async (req, res) => {
    var users = await User.find({});

    res.send(users);
});

router.post('/register', async (req, res) => {
    var datosUsuario = req.body;

    var userExists = await User.findOne({$or:[{nickname: datosUsuario.nickname}, {email: datosUsuario.email}]});
    if(userExists){
        return res.status(400).send({
            error: "El usuario con ese nick name ya existe"
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
        message: 'Usuario registrado correctamente'
    });
});

module.exports = router;
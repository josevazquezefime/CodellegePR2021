//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const User = require('../models/user');

//IMPORTAR el modulo validate
const Validate = require ('../validation/validate');

router.get('/all', async (req, res) => {
    var users = await User.find({});

    res.send(users);
});

router.get('/:nickname', async (req, res) => {
    var parametros = req.params;
    var nickname = parametros.nickname;

    var user = await User.findOne({
        nickname: nickname}); 
        
    //findone puede regresar null o el usuario 
    if (!user) {
        //user no existe 
        return res.status(404).send({
            message: "El usuario:" + nickname + "no existe"
        });
    }
    return res.send(user);
});

router.post('/register', async (req, res) => {
            //El parámetro 'req' contiene toda la información que se envía para generar esta petición
            //O sea, aquí vienen los datos
            var datosUsuario = req.body;

            //Validamos que la informacion necesaria se haya previsto de manera correcta
            const {error} = validate.registration (datosUsuario); 
            if(error) {
                return res.stuatus (404).send ({
                    error: error.details [0].message
                });
            }

            //OR en el wuary de MONGO 

            var userExists = await User.findOne({
                $or: [{
                    nickname: datosUsuario.nickname
                }, {
                    email: datosUsuario.email
                }]
            });
            if (userExists) {
                return res.status(400).send({
                    error: "El usuario con este nickname ya existe"
                });
            }
   


                router.put('/register', async (req, res) => {
                    const nickname = req.params.nickname; 
                    const userData = req.body; 
                });

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
            }

            router.delete('/:nickname', async (req, res) => {
            var parametros = req.params;
            var nickname = parametros.nickname;

            var usuarioBorrado = await User.deleteOne({
                nickname: nickname
            });
            res.send({
                message: "Se ha borrado el usuario:" + nickname
            });
        }

        router.put('/:nickname', async (req, res) => {
            const nickname = req.params.nickname;
            const userData = req.body;

            var user = await User.findOne ({ nickname: nickname });

            //findone puede regresar null o el usuario 
    if (!user) {
        //user no existe 
        return res.status(404).send({
            message: "El usuario:" + nickname + "no existe"
        });
    }

    if (userData.name) {
        user.name =userData.name;
    }

        if (userData.lastName) {
            user.lastName = userData.lastName; 
        }
    
  res.send ({
      message: "Se actualizó el usuario correctamente"
  });
    
    
};
        //Exportar o generar el módulo users.js
        //Para ello debemos exportar aquello que contenga a todo la información
        module.exports = router;
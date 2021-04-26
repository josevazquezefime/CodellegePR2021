// Referencia del servidor express
const express = require('express');

// Crear un enrutador para este micro-servicio
const router = express.Router();

// Importar nuestro modelo de datos
const User=require('../models/user');

router.get('/all', async (req, res) => {
    var users = await User.find({}, {__v:0, _id:0});
    
    res.send(users);
});

router.get('/:idUser', async(req,res)=> {
    
    var parametros=req.params;
    var idUser=parametros.idUser;

    var user=await User.findOne({idUser:idUser}, {__v:0, _id:0, password:0});
    //findOne puede regresar null o el usuario
    if (!user){
        //user no existe
        return res.status(404).send({
            message: "El usuario: " +idUser+ " no existe"
        });
    }
    return res.send(user);
});

router.post('/register', async(req, res)=> {
//El parametro 'req' contiene toda la info que se envia para generar esta petición
//Osea, aqui vienen los datos
var datosUsuario=req.body;

//OR en el query de Mongo
var userExists=await User.findOne({ $or: [{ idUser: datosUsuario.idUser }, {email: datosUsuario.email}] });
if(userExists) {
    return res.status(401).send({
        error: "El usuario con este id/email ya existe"
    });
}

var usuarioRegistrado= new User ({
    idUser: datosUsuario.idUser,
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

router.put('/:idUser', async (req, res) => {
    const idUser=req.params.idUser;
    const userData=req.body;

    var user = await User.findOne({idUser:idUser});

    if(!user){
        //user no existe
        return res.status(404).send({
            message: "El usuario: " + idUser + " no existe"
        });
    }

    //Los objetos en JS tambien se les conoce como Key-Value Pair
    // key es único
    var propiedades=Object.keys(userData);
    //Regresa un array [Strings]
    for (var i=0; i < propiedades.length; i++) {
        const propiedad=propiedades[i];
        switch(propiedad){
            case "name":
                user.name=userData.name
            break;
            case "lastName":
                user.lastName=userData.lastName
            break;
            case "phone":
                user.phone=userData.phone
            break;
            case "password":
                user.password=userData.password
            break;
            case "address":
                user.address=userData.address
            break;          
        }
    }

    await user.save();

    res.send({
        message: "Se actualizo el usuario correctamente"
    });
});

router.delete('/:idUser', async (req, res)=> {

        var parametros=req.params;
        var idUser=parametros.idUser;

        var usuarioBorrado = await User.deleteOne({idUser:idUser});

        res.send({
            message: "Se ha borrado el usuario: " + idUser
        });
});

//Exportar o generar el modulo users.js
//Para ello debemos exportar aquello que contenga a toda la info
module.exports=router;
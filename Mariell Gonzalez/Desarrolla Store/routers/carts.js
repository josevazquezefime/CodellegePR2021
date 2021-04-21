//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//importar el esquema de datos de un Carts 
const Cart = require ('../models/cart');

//Endpoint del tipo GET; que se llame getCart
//debe revisar si existe una cookie con el ID de un carrito



//Exportar o generar el modulo carts.js 
//Para ello debemos exportar aquello que contenga a todo la cookie se llama CARTID
//Si existe, buscalo en la BDD y regresalo, si no, crear un nuevo con ese ID en el BDD y regresalo
// la cookie es para guardar datos de los clientes - identificadores o tokens 

router.get('/getCart', async (req, res) => {
    var CartID = req.cookies ['CARTID'];
    if (cartID) {
        var carrito = Cart.findOne({ id: cartID}, {
            _id: 0,
            __v:0
        });

        if (carrito) {
            return res.send (carrito);
        }
    } else {
        cartID = utils.genCartID();
        res.cookie ('CARTID', "12345")
    }

        carrito = new Cart({
            id: "12345",
            products: [],
            quantity: 0,
            total: 0
        });

        await carrito. save();

        return res.send (carrito);

})
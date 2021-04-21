//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar el esquema de datos de un Cart
const Cart = require('../models/cart');

//Importar el esquema de datos de un User
const User = require('../models/user');

//Importar el módulo de utilities
const Utils = require('../utils/utils');

//Endpoint del tipo GET, que se llame getCart
//Debe revisar si existe una cookie con el ID de un carrito (La cookie se llama CARTID)
//Si existe, buscarlo en la BDD y regresarlo, si no, crear uno nuevo con ese ID en la BDD y regresarlo
router.get('/getCart', async (req, res) =>{
    var cartID = req.cookies["CARTID"];
    var session = req.cookies["SESSIONID"];
    var userCart = null;
    var user = null;

    if(session) {
        user = await User.findOne({ nickname: session });
        if(user) {
            userCart = await Cart.findOne({ id: user.cartID }, {
                _id: 0,
                __v: 0
            });
        }
    }
    
    if(cartID) {
        var carrito = await Cart.findOne({ id: cartID }, {
            _id: 0,
            __v: 0
        });

        if(carrito) {
            if(userCart) {
                //Fusionar carritos
                if(userCart.id !== cartID) {
                    //Fusión de productos
                    res.cookie('CARTID', userCart.id, {
                        expires: new Date(2025, 1, 1)
                    });

                    return res.send(userCart);
                }
            }

            return res.send(carrito);
        } else if(user && userCart) {
            res.cookie('CARTID', userCart.id, {
                expires: new Date(2025, 1, 1)
            });

            return res.send(userCart);
        }
    } else {
        if(user && userCart) {
            res.cookie('CARTID', userCart.id, {
                expires: new Date(2025, 1, 1)
            });
            return res.send(userCart);
        }

        cartID = Utils.genCartID();
        res.cookie('CARTID', cartID, {
            expires: new Date(2025, 1, 1)
        });
    }

    carrito = new Cart({
        id: cartID,
        products: [],
        quantity: 0,
        total: 0
    });

    await carrito.save();

    if(user && !userCart) {
        user.cartID = cartID;
        await user.save();
    }

    res.send(carrito);

});

//Exportar o generar el módulo carts.js
//Para ello debemos exportar aquello que contenga a todo la información
module.exports = router;
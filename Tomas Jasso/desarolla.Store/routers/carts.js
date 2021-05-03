// //Referencia del servidor de express
// const express = require('express');

// //Crear un enrutador para este micro-servicio
// const router = express.Router();

// //Importar el esquema de datos de un Cart
// const Cart = require('../models/cart');

// //Importar el esquema de datos de un User
// const User = require('../models/user');

// //Importar el esquema de datos de un Product
// const Product = require('../models/product');

// //Importar el módulo de utilities
// const Utils = require('../utils/utils');

// //Endpoint del tipo GET, que se llame getCart
// //Debe revisar si existe una cookie con el ID de un carrito (La cookie se llama CARTID)
// //Si existe, buscarlo en la BDD y regresarlo, si no, crear uno nuevo con ese ID en la BDD y regresarlo
// router.get('/getCart', async (req, res) =>{
//     var cartID = req.cookies["CARTID"];
//     var session = req.cookies["SESSIONID"];
//     var userCart = null;
//     var user = null;

//     if(session) {
//         user = await User.findOne({ nickname: session });
//         if(user) {
//             userCart = await Cart.findOne({ id: user.cartID });
//         }
//     }
    
//     if(cartID) {
//         var carrito = await Cart.findOne({ id: cartID }, {
//             _id: 0,
//             __v: 0
//         });

//         if(carrito) {
//             if(userCart) {
//                 //Fusionar carritos
//                 if(userCart.id !== cartID) {
//                     //Fusión de productos
//                     carrito.products.forEach(producto => {
//                         var existeProducto = userCart.products.some( p => p.sku === producto.sku);
//                         if(existeProducto) {
//                             var indexProducto = userCart.products.findIndex(p => p.sku === producto.sku);
//                             userCart.products[indexProducto].qty += producto.qty;
//                         } else {
//                             userCart.products.push(producto);
//                         }
//                     });

//                     userCart.quantity += carrito.quantity;
//                     userCart.total += carrito.total;

//                     userCart.markModified('products');
//                     await userCart.save();

//                     res.cookie('CARTID', userCart.id, {
//                         expires: new Date(2025, 1, 1)
//                     });

//                     userCart = userCart.toObject();
//                     delete userCart._id;
//                     delete userCart.__v;
//                     return res.send(userCart);
//                 }
//             }

//             return res.send(carrito);
//         } else if(user && userCart) {
//             res.cookie('CARTID', userCart.id, {
//                 expires: new Date(2025, 1, 1)
//             });

//             return res.send(userCart);
//         }
//     } else {
//         if(user && userCart) {
//             res.cookie('CARTID', userCart.id, {
//                 expires: new Date(2025, 1, 1)
//             });
//             return res.send(userCart);
//         }

//         cartID = Utils.genCartID();
//         res.cookie('CARTID', cartID, {
//             expires: new Date(2025, 1, 1)
//         });
//     }

//     carrito = new Cart({
//         id: cartID,
//         products: [],
//         quantity: 0,
//         total: 0
//     });

//     await carrito.save();

//     if(user && !userCart) {
//         user.cartID = cartID;
//         await user.save();
//     }

//     carrito = carrito.toObject();
//     delete carrito._id;
//     delete carrito.__v;
//     res.send(carrito);

// });

// <<<<<<< HEAD
// //Endpoint del tipo PUT para ver un carrito en específico
// //Se llamará viewCart
// //Debe recibir de body: { cartID: 'asjdhadh' }
// //Debe regresar el carrito con ese id, si no, regresar un mensaje que diga:
// //El carrito XYZ no existe.
// //Utilice getCart para generar uno...
// router.put('/viewCart', async (req, res) =>{
//     const cartID = req.body.cartID;
//     var cart = await Cart.findOne({ id: cartID }, {
//         _id: 0,
//         __v: 0
//     });

//     if(cart) {
//         return res.send(cart);
//     }

//     res.status(404).send({
//         error: "El carrito: " + cartID + " no existe"
//     });
// });


// //Endpoint del tipo PATCH para añadir/actualizar productos llamado 'add'
// /**
//  * Para añadir un producto, necesitamos mandar el ID del producto (sku)
//  * Buscamos ese producto en la BDD y si se encuentra el producto, lo añadimos, si no, ignorarlo
//  * Mandamos la información a través del body: { sku: 12345, qty: 1 }
//  * Los productos nuevos se añaden en el Cart.products... Es un Array que tiene cada carrito de la BDD
//  * Recuerden que debe recuperar el carrito de la cookie...
//  * Los productos que ya existen, añadir a su cantidad el qty que tiene.
//  * Todo esto afecta al Cart... Tanto en total, quantity, basado en el products...
//  */
// router.patch('/add', async (req, res) =>{
//     var producto = req.body;
//     var cartID = req.cookies["CARTID"];
//     var carrito = null;

//     if( !producto.sku || !producto.qty ) {
//         return res.status(400).send({
//             message: "Debe incluir el sku y el qty en la petición"
//         });
//     }

//     var qty = parseInt(producto.qty);
//     if(isNaN(qty) || qty < 1) {
//         return res.status(400).send({
//             message: "producto.qty debe ser un número entero mayor o igual a 1"
//         });
//     }

//     producto.qty = qty;

//     //Añadir el producto al carrito...
//     //Cuál carrito?
//     carrito = await Cart.findOne({ id: cartID });

//     if(!carrito) {
//         return res.status(400).send({
//             message: "No existe un carrito asociado a esta petición... Ejecute el endpoint /carts/getCart"
//         });
//     }

//     var productoAñadir = await Product.findOne({ sku: producto.sku });
//     if(productoAñadir) {
//         //En el Cart.products se guardará lo siguiente:
//         /**
//          * {
//          *    sku: "123",
//          *    name: "Producto nombre",
//          *    description: "Producto descripción"
//          *    qty: 1,
//          *    unit_price: 15.4
//          * }
//          */
//         var existeEnCarrito = carrito.products.some( p => p.sku === productoAñadir.sku );
//         if(existeEnCarrito){
//             //Actualizar el qty del producto en el carrito
//             var productoCarrito = carrito.products.findIndex( p => p.sku === productoAñadir.sku );
//             carrito.products[productoCarrito].qty += producto.qty;
//         } else { 
//             //Añadir este producto al carrito
//             carrito.products.push({
//                 sku: productoAñadir.sku,
//                 name: productoAñadir.name,
//                 description: productoAñadir.description,
//                 qty: producto.qty,
//                 unit_price: productoAñadir.price,
//                 images: productoAñadir.images
//             });
//         }

//         carrito.quantity += producto.qty;
//         carrito.total += producto.qty * productoAñadir.price;

//         carrito.markModified('products');
//         await carrito.save();
//     }

//     carrito = carrito.toObject();
//     delete carrito._id;
//     delete carrito.__v;
//     return res.send(carrito);

// });

// //Endpoint para validar un carrito


// //Endpoint para eliminar un producto del carrito -> Actualizar


// //Exportar o generar el módulo carts.js
// //Para ello debemos exportar aquello que contenga a todo la información
// module.exports = router;
// =======
// >>>>>>> Tomas-Jasso-Brranch

// router.put('/viewCart', async (req, res) =>{
//     const cart = req.body;
//     var cart = await Cart.findOne({ id: cartID };
//         _id: 0,
//         __v: 0
// });

//     if(cart) {
//         return res.send(cart);
//     }

//     res.status(404).send({
//         error: "El carrito " + cartID + " no existe"
//     });


// //Endpoint del tipo PATCH para añadir/actualizar productos
// // Para añadir un producto, necesitamos mandar el ID del producto (sku)
// // Buscamos ese producto en la BDD y si se encuentra el producto, lo añadimos, si no, ignorarlo
// // Mandamos la informacion a traves del body { productID: 12345, qty: 1 }
// // Los productos nuevos se añaden en el Cart.products... Es un array que tiene cada carrito de la BDD
// // Recuerden que debe recuperar el carrito de la cookie
// // Los productos que ya existen, añadir a su cantidad el qty que tiene
// // Todo esto afecta al Cart... Tanto en total, quantity, basado en el products





// //Exportar o generar el módulo carts.js
// //Para ello debemos exportar aquello que contenga a todo la información
// module.exports = router;


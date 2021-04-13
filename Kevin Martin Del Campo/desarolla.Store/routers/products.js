//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Product = require('../models/product');

//Endpoint para ver todos los productos
//GET -> /all
router.get('/all', async (req, res) =>{
    var productos = await Product.find({}, {
        _id: 0,
        __v: 0
    });

    res.send(productos);
});

//Endpoint para crear un producto
//POST -> /new
router.post('/new', async (req, res) =>{
    var productData = req.body;

    var productExists = await Product.findOne({
        sku: productData.sku
    });

    if(productExists) {
        return res.status(401).send({
            error: "El producto con el SKU: " + productData.sku + " ya existe."
        });
    }

    var producto = new Product({
        sku: productData.sku,
        name: productData.name,
        description: productData.description,
        stock: productData.stock,
        price: productData.price,
    });

    await producto.save();

    res.send({
        message: "El producto se ha creado correctamente."
    });

});

//Endpoint para ver un producto en específico
router.get('/:sku', async (req, res) =>{
    var sku = req.params.sku;

    var producto = await Product.findOne({ sku: sku }, {
        _id: 0,
        __v: 0
    });

    if(!producto) {
        return res.status(404).send({
            message: "El producto identificado por el SKU: " + sku + " no existe" 
        });
    }

    res.send(producto);
});

//Endpoint para borrar un producto en específico
router.delete('/:sku', async (req, res) =>{
    var sku = req.params.sku;

    var productExists = await Product.findOne({ sku: sku }, {
        _id: 0,
        __v: 0
    });

    if(!productExists) {
        return res.status(404).send({
            message: "El producto identificado por el SKU: " + sku + " no existe" 
        });
    }

    await Product.deleteOne({sku: sku});
    res.send({
        message: "Se ha borrado el producto: " + sku
    });
});

//Exportar o generar el módulo users.js
//Para ello debemos exportar aquello que contenga a todo la información
module.exports = router;

const express = require('express');


const router = express.Router();


const Product = require('../models/product');


router.get('/all', async (req, res) =>{
    var productos = await Product.find({}, {
        _id: 0,
        __v: 0
    });

    res.send(productos);
});

function ToRegex( texto ) {

    var textoRegex = "";

    //Suponiendo que el texto es "aspirador auto"
    for (var i = 0; i < texto.length; i++) {
        const caracter = texto.charAt(i);
        if(caracter === ' ') {
            textoRegex += ".*";
        } else {
            textoRegex += '[' + caracter.toUpperCase() + caracter.toLowerCase() + ']';
        }
    } //[Aa][Ss][Pp][Ii][Rr][Aa][Dd][Oo][Rr].*[Aa][Uu][Tt][Oo]

    return textoRegex;
}

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

module.exports = router;
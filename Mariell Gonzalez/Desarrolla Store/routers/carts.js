//Referencia del servidor de express
const express = require('express');

//Crear un enrutador para este micro-servicio
const router = express.Router();

//importar el esquema de datos de un Carts 
const Cart = require ('../models/cart');

//Exportar o generar el modulo carts.js 
//Para ello debemos exportar aquello que contenga a todo la 
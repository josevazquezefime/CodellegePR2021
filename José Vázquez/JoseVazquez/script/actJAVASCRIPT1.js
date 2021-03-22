var elementoA = 'Oxígeno',
    elementoB = 'Azufre',
    elementoC = 'Cobre',
    elementoD = 'Plata';

function Mezcla(elem1, elem2) {
    if (elem1 === 'Azufre' && elem2 === 'Cobre' || elem1 === 'Cobre' && elem2 === 'Azufre') {
        console.log("Huele raro y se ve verde azulado");
    } else if (elem1 === 'Azufre' && elem2 === 'Plata') {
        console.log("Huele raro y se ve cromado");
    } else if (elem1 === 'Oxígeno' && elem2 === 'Cobre') {
        console.log("Se ve como la estatua de la libertad");
    } else if (elem1 === 'Oxígeno' && elem2 === 'Plata') {
        console.log("Ya le dañamos la joyería a la abuela");
    } else if (elem1 === 'Plata' && elem2 === 'Cobre') {
        console.log("Eso es joyería rara y cara :V");
    } else if (elem1 === 'Azufre' && elem2 === 'Oxígeno') {
        console.log("Es esto un agua termal mortal?");
    } else {
        console.log('Aún no conozco como combinar: ' + elem1 + " con " + elem2);
    }
}
/************************************************************************************** */
var lista=[{
    nombre:'Zanahoria',
    departamento: 'Alimentos',
    precio:'19.99',
    peso:0.86
},
{
    nombre:'Crema corporal',
    departamento: 'Belleza',
    precio:'50.009',
    peso:1
},
{
    nombre: "Filete de Pescado",
    departamento: "Alimentos",
    precio: 50.09,
    peso: 0.35
},
{
    nombre: "Queso Asadero",
    departamento: "Alimentos",
    precio: 49.999,
    peso: 0.70
},
{
    nombre: "Naranja",
    departamento: "Alimentos",
    precio: 26.00,
    peso: 0.86
},
{
    nombre: "Pau Pau Pack",
    departamento: "Alimentos",
    precio: 50.001,
    peso: 6
},
{
    nombre:'Antitranspirante',
    departamento: 'Belleza',
    precio: 50.0001,
    peso: .450
},
{
    nombre: "Enjuague bucal",
    departamento: "Belleza",
    precio: 50.1,
    peso: 0.3
},
{
    nombre: 'Shampoo Especial',
    departamento: 'Belleza',
    precio: 49.999,
    peso: 0.7
}
];
for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];
    if (producto.precio > 50) {
        console.log(producto);
    }
}
/********************************************* */

var alimentos = []; //5 alimentos
var belleza = []; //3 belleza

for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if (producto.departamento === 'Alimentos') {
        alimentos.push(producto);
    } else if (producto.departamento === 'Belleza') {
        belleza.push(producto);
    }
}

console.log(alimentos);
console.log(belleza);

/*********************************************************** */

var total = 0;
for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    if (producto.departamento === 'Belleza' && producto.precio > 50) {
        producto.precio = producto.precio * 0.9;
    } else if (producto.departamento === 'Alimentos' && producto.precio > 20) {
        producto.precio = producto.precio * 0.95;
    }

    total = total + producto.precio;
}

if(total > 300) {
    lista.push({nombre: "Regalo", precio: 0, departamento: "Jueguetes", peso: "0"});
}

console.log(lista);
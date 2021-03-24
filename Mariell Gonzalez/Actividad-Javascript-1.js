
//separar por comas para evitar la palabra var tantas veces

var elementoA = "Oxígeno", 
elementoB = "Azufre", 
elementoC = "Cobre", 
elementoD = "Plata";

function Mezcla ( elem1, elem2 ) {
    if (elem1 === "Azufre" && elem2 === "Cobre") {
        console.log ("Hule raro y se ve verde azulado");
    
    }
//Else if porque hay varios el ultimo solamente queda con If
    else if (elem1 === "Azufre" && elem2 === "Plata") {
        console.log ("Hule raro y se ve cromado");
    }

    else if (elem1 === "Oxígeno" && elem2 === "Cobre") {
        console.log ("Se ve como la estatua de la libertad");
    }

    else if (elem1 === "Oxígeno" && elem2 === "Plata") {
        console.log ("Ya le dañamos la joyería a la abuela");
    }

    else if (elem1 === "Plata" && elem2 === "Cobre") {
        console.log ("Eso es joyeria rara y cara");
    }

    else if (elem1 === "Azufre" && elem2 === "Oxigeno") {
        console.log ("Es esto un agua termal mortal?");
    }
//no se como combinar lo demás 
    else  {
        console.log ("Aún no conozco como combinar " + elem1 + " con " + elem2);
    }
}

// ejemplo con or ||

Mezcla(elementoA, elementoD);

var elementoA = "Oxígeno", 
elementoB = "Azufre", 
elementoC = "Cobre", 
elementoD = "Plata";

function Mezcla ( elem1, elem2 ) {
    if (elem1 === "Azufre" && elem2 === "Cobre" || elem1 === "Cobre" && elem2 === "Azufre") {
        console.log ("Hule raro y se ve verde azulado");
    
    }
//Else if porque hay varios el ultimo solamente queda con If
    else if (elem1 === "Azufre" && elem2 === "Plata") {
        console.log ("Hule raro y se ve cromado");
    }

    else if (elem1 === "Oxígeno" && elem2 === "Cobre") {
        console.log ("Se ve como la estatua de la libertad");
    }

    else if (elem1 === "Oxígeno" && elem2 === "Plata") {
        console.log ("Ya le dañamos la joyería a la abuela");
    }

    else if (elem1 === "Plata" && elem2 === "Cobre") {
        console.log ("Eso es joyeria rara y cara");
    }

    else if (elem1 === "Azufre" && elem2 === "Oxigeno") {
        console.log ("Es esto un agua termal mortal?");
    }

// lista del super 

var lista = [
    {nombre: "Plátano", precio: 19.40, peso: "850g"},
    {nombre: "Shampoo", precio: 74, peso: "1lt"},
    {nombre: "Camarón", precio: 125, peso: "500g"},
    {nombre: "Salchicha", precio: 34.45, peso: "500g"},
    {nombre: "Manzana", precio: 26, peso: "860g"},
    {nombre: "Pack Jugos", precio: 80, peso: "6Lt"},
];

for (var i = 0; i < lista.length; i++) {
    const producto = lista [i]; 
    if(producto.precio > 50) {
        console.log (producto);
    }
}


    /*
    Crear una lista del supermercado de la siguiente manera: (Mínimo 5 productos)
        -Cada artículo del carrito debe tener: nombre, precio, peso.
        Ej: {nombre: "Plátano", precio: 19.40, peso: "860g"}

    Mostrar SOLO los elementos con un precio mayor a 50 pesos.
*/

var lista = [
    {nombre: "Plátano", departamento: "Alimentos", precio: 19.40, peso: "860g"},
    {nombre: "Shampoo", departamento: "Belleza", precio: 74, peso: "1Lt"},
    {nombre: "Camarón", departamento: "Alimentos", precio: 125, peso: "500g"},
    {nombre: "Salchicha", departamento: "Alimentos", precio: 34.45, peso: "540g"},
    {nombre: "Manzana", departamento: "Alimentos", precio: 26.00, peso: "860g"},
    {nombre: "Pack Jugos", departamento: "Alimentos", precio: 80.00, peso: "6Lt"},
    {nombre: "Jabón corporal", departamento: "Belleza", precio: 55.00, peso: "300g"}

];

for (var i = 0; i < lista.length; i++) 
    const producto = lista[i];
    if(producto.precio > 50) {
        console.log(producto);
    }}

var oxigeno = "oxígeno";
var azufre = "azufre";
var cobre = "cobre";
var plata = "plata";


function Mezcla(elem1, elem2){
    if(elem1==="azufre" && elem2==="cobre"){
        console.log("Huele raro y se ve verde azulado");
    } else if (elem1==="azufre" && elem2==="plata"){
        console.log("Huele raro y se ve raro");
    } else if (elem1==="oxigeno" && elem2==="cobre"){
        console.log("Se ve como la estatua de la libertad");
    } else if (elem1==="oxigeno" && elem2==="plata"){
        console.log(" Ya le dañamos la joyería a la abuela");
    } else if(elem1==="plata" && elem2==="cobre"){
        console.log("Eso es joyería rara y cara");
    } else if(elem1==="azufre" && elem2==="oxigeno"){
        console.log("Es esto un agua termal mortal?");
    }
}

Mezcla(azufre,cobre)
Mezcla(azufre,plata)
Mezcla(oxigeno,cobre)
Mezcla(oxigeno,plata)
Mezcla(plata,cobre)
Mezcla(azufre,oxigeno)

var lista = [
    {nombre:"Platano", precio:20, peso:100, departamento:"alimentos"},
    {nombre:"Naranja", precio:90, peso:100, departamento:"alimentos"},
    {nombre:"Atun", precio:70, peso:100, departamento:"alimentos"},
    {nombre:"Tortilla", precio:60, peso:100, departamento:"alimentos"},
    {nombre:"Tomate", precio:120, peso:100, departamento:"alimentos"},
    {nombre:"Shampoo", precio:80, peso:100, departamento:"belleza"}
]
for(var i=0; i<lista.length; i++) {
    const producto=lista[i];
    if(lista[i].precio <50){
        console.log(producto);
    }
}

var alimentos = [];
var belleza = [];

for(var i=0; i<lista.length;i++){
    const producto =lista[i];

    if(producto.departamento === "alimentos"){
        alimentos.push(producto);
    }
    else if (producto.departamento === "belleza"){
        belleza.push(producto);
    }
}
console.log(alimentos);
console.log(belleza);

for(var i=0; i<lista.length;i++){
    const producto =lista[i];

    if(producto.precio < 50 && producto.departamento==="belleza"){
       console.log(precio*.90);
    }
    else if (producto.departamento === "belleza"){
        belleza.push(producto);
    }
    else if (producto.departamento === "alimentos" && producto.peso => 600){
        console.log(precio*.95);
    }
}
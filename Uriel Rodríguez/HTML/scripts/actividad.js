var elementoA="Oxigeno";
var elementoB="Azufre";
var elementoC="Cobre";
var elementoD="Plata";

function Mezcla(elemento1, elemento2){
    if (elemento1==="Azufre" && elemento2==="Cobre"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" huele raro y se ve verde azulado");
    } else if(elemento1==="Azufre" && elemento2==="Plata"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" huele raro y se ve cromado");
    } else if(elemento1==="Oxigeno" && elemento2==="Cobre"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" se ve como la estatua de la libertad");
    } else if(elemento1==="Oxigeno" && elemento2==="Plata"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" ya le dañamos la joyería a la abuela");
    } else if (elemento1==="Plata" && elemento2==="Cobre"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" eso es joyería rara y cara :v");
    } else if (elemento1==="Azufre" && elemento2==="Oxigeno"){
        console.log("Al combinar "+elemento1+ " y "+elemento2+" es esto un agua termal mortal?");
    } else{
        console.log("La combinación de "+elemento1+" y "+elemento2+" no es posible");
    }
}

Mezcla(elementoA, elementoC)
Mezcla(elementoB, elementoC)
Mezcla(elementoB, elementoD)
Mezcla(elementoA, elementoD)
Mezcla(elementoD, elementoC)
Mezcla(elementoB, elementoA)
Mezcla(elementoA, elementoB)

var productos=[];

 productos.push({
    
 })

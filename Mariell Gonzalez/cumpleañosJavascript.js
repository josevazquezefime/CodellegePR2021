
//Hacer una lista de cumpleaños 

var cumpleañeros = [
    {
        nombre: "Mariell González Allande",
        fecha: "11/03/1999",
        imagen: "imagenes/Mariell.jpg",
        regalos: "Me gustaría una perro",
        mostrarDetalles: function (){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
        }
    },

    {
        nombre: "Mariell González Allande",
        fecha: "11/03/1999",
        imagen: "imagenes/Mariell.jpg",
        regalos: "Me gustaría una perro",
        mostrarDetalles: function (){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
    }
    },

    {
        nombre: "Mariell González Allande",
        fecha: "11/03/1999",
        imagen: "imagenes/Mariell.jpg",
        regalos: "Me gustaría una perro",
        mostrarDetalles: function (){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaría de regalos: " + this.regalos);
    }
}];

console.log(cumpleañeros.length);

cumpleañeros[0].mostrarDetalles();
cumpleañeros[1].mostrarDetalles();

//todo se separa por coma 


//************* */
//Sentencias condicionales 

var edad=16;
var esMayor= edad > 17; 

var tipoEdad =esMayor ? " MAyor de edad " : " Menor de edad ";
console.log(tipoEdad); 

if(esMayor) {
    console.log ("Mayor de edad") ;
}
else if (edad ===18){ 
    console.log ("Recien mayor de edad"); 
} 
else {
    console.log ("Menor de edad"); 
}

//********* */
//Ciclos 

for (var i= 0; i < cumpleañeros.length; i++) {
    var cumpleañero = cumpleañeros[i]; 
    cumpleañero.mostrarDetalles();
}



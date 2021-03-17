
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
//Ciclo for es mas utilizado para contar 
// ciclo invertido (ultima a primero) 
// Var i = cumpleañeors.length -1; i>= 0 ; i 

for (var i= 0; i < cumpleañeros.length; i++) {
    var cumpleañero = cumpleañeros[i]; 
    cumpleañero.mostrarDetalles();
}

// El ciclo while es para repetir indefinidamente hasta que se cumpla algo 
 var contador =1; 

    while( contador < 10 ){
        console.log("Ciclo While: " + contador);

        contador++;
    } 

    console.log("Debería estar aquí...  ");

    // Romper con el ciclo

    var contador =1; 

    while( true ) {
        if (contador >= 10 ){
        break; 

    } 

    console.log("Ciclo While " + contador );

    contador++;

}

function MostrarError (codigo =0) {
    if(codigo ===0) {
        console.log ("HA ocurrido un error en la aplicación. Código de error: " + codigo);  
    } 
    else if (codigo ===2 ) {
        console.log ("No se pudo cargar la información. Código de error: " + codigo);  
    } 
    else {
        console.log ("No se reconoce este codigo de error " + codigo);
    }


    switch (codigo) {
        case 0: 
        console.log ("Ha ocurrido un error en la aplicación. Código de error: " + codigo); 
        break;


        case 2: 
        console.log ("No se pudo cargar la información. Código de error: " + codigo);
        break;
        
        case 19:
            console.log ("No se pudo cargar la infomración. Código de error: " + codigo);
            break;

    }
}


MostrarError (7);
MostrarError (3);
MostrarError (2);
MostrarError (0);


//Operadores logicos
//and, or, xor, bitwise, not
//mostrar si un numero pertenece al rango 0-20 

var numero = 15; 

// *If (numero >=0) {
//if (numero <=20){
//console.log ("El numero : " + numero + " pertenece al rango 0-20");}

// &&= AND 
//|| = OR

if (numero >= 0 && numero <= 20) {
    console.log ("El numero: " + numero + " pertenece al rango 0-20");
    if (numero <= 20);
}

var edad = 17;

if (edad === 15 || edad === 17) {
    console.log ("Si puede participar");
}
 else {
     console.log ("No puede participar");
 }

// si me sale 16 no me va a salir 
//Hacer una lista de cumpleañeros
var cumpleañeros = [];

cumpleañeros.push({
    nombre: "Kevin Martin del Campo",
    fecha: "14/04/1995",
    imagen: "images/kevin.jpg",
    regalos: "Me gustaría un pastel de chocolate",
    mostrarDetalles: function () {
        console.log("Nombre: " + this.nombre);
        console.log("Cumple el: " + this.fecha);
        console.log("Le gustaría de regalos: " + this.regalos);
    }
});

cumpleañeros.push({
    nombre: "Samuel Alfonso Casanova Arteaga",
    fecha: "14/04/1995",
    imagen: "images/kevin.jpg",
    regalos: "Me gustaría un pastel de chocolate",
    mostrarDetalles: function () {
        console.log("Nombre: " + this.nombre);
        console.log("Cumple el: " + this.fecha);
        console.log("Le gustaría de regalos: " + this.regalos);
    }
});

//cumpleañeros[0].mostrarDetalles();
//cumpleañeros[1].mostrarDetalles();

//***************************************//
//Sentencias condicionales

var edad = 15;
var esMayor = edad > 18;
/*
var tipoEdad = esMayor ? "Mayor de edad" : "Menor de edad";
console.log(tipoEdad);

if(esMayor) {
    console.log('Mayor de edad');
} else if(edad === 18) {
    console.log('Recién mayor de edad');
} else {
    console.log('Menor de edad');
}
*/
/***********************************************/
//Ciclos
//Un ciclo es más utilizado para contar
//Ciclo invertido (Última a primero)
//var i = cumpleañeros.length - 1; i >= 0; i--
for (var i = 0; i < cumpleañeros.length; i++) {
    var cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();
    console.log("------------------------------")
}
//Terminó el for

//El ciclo while es para repetir indefinidamente hasta que se cumpla algo
var contador = 1;
while (contador < 10) {
    /*if (contador >= 10) {
        break;
    }*/

    console.log('Ciclo While: ' + contador);

    contador++;
}

/************************************/
console.log("------------------------------")

//El do while
contador = 1;
do {
    /*if (contador >= 10) {
        break;
    }*/
    //contador = 0;
    console.log('Ciclo While: ' + contador);

    contador++;
} while (contador < 10)

console.log('Debería estar aquí...');
console.log("------------------------------")

function MostrarError( codigo = 0 ) {
    /*if(codigo === 0) {
        console.log('Ha ocurrido un error en la aplicación. Código de error: ' + codigo);
    } else if(codigo === 2) {
        console.log('No se pudo cargar la información. Código de error: ' + codigo);
    } else if(codigo === 7) {
        console.log('Se perdió la conexión al servidor principal. Código de error: ' + codigo);
    } else if(codigo === 14) {
        console.log('No se pudo guardar la información temporal. Código de error: ' + codigo);
    } else if(codigo === 19) {
        console.log('Error al intentar leer el archivo de datos. Código de error: ' + codigo);
    } else {
        console.log('No se reconoce este código de error: ' + codigo);
    }*/

    switch (codigo) {
        case 0:
            console.log('Ha ocurrido un error en la aplicación. Código de error: ' + codigo);
            break;

        case 2:
            console.log('No se pudo cargar la información. Código de error: ' + codigo);
            break;

        case 7:
            console.log('Se perdió la conexión al servidor principal. Código de error: ' + codigo);
            break;

        case 14:
            console.log('No se pudo guardar la información temporal. Código de error: ' + codigo);
            break;

        case 19:
            console.log('Error al intentar leer el archivo de datos. Código de error: ' + codigo);
            break;
            
        default:
            console.log('No se reconoce este código de error: ' + codigo);
            break;
    }
}

MostrarError(3);

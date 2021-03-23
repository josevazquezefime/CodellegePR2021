 
 
 // puedes iniciar con valores como n1=1 

function Suma (n1, n2) {
console.log (n1+n2);

}

Suma (5,6);
Suma(10,3)

// son variables y abajo en suma (x,y) se agregan los valores 
// NaN - not a number 
// un undefined nos regresa not a numbrr 
//undefined es una varibale vacia 

Suma (); 

// no hay valor- se quedan declaradas --> NaN

function Suma (n1=1, n2=3) {
    var suma =n1+ n2;
    return suma;
    
    }

    var suma = Suma (5,6);
    console. log (suma);

    var suma = Suma (10,3);
    console. log (suma);

    var suma = Suma ();
    console. log (suma);

    // crear la funcion NombreCompleto, que reciba de parametro: nombre, apellidoPaterno, apellidoMaterno, 
    //el resultado debe regresar la concatenación de los 3 valores 
    //Imprimir el valor regresando con la consola 

    function NombreCompleto (nombre, apellidoPaterno,  apellidoMaterno) {
     var nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;
     return nombreCompleto; 
    }

    var nombreCompleto = NombreCompleto ("Mariell", "González", "Allande");
    console.log (nombreCompleto);

    // crear un objeto mascota

    var mascota = {
    raza: "Chihuahua",
    edad: 7, 
    color: "Blanco con café",
    tamaño: "Pequeño",
    nombre: "Copo de nieve",
    imagen: "ruta de la imagen", //imagenes/copo.jpg 
    ladrido: function () {
        return "Woof"; 
    }
    };

    console.log (mascota.ladrido ());


    function LimitesDeNumero (n1, n2) {
    var esMayor = n1 > n2; 

    
    //Ej 5 es mayor que 3? "si" : "no"
    var resultado ="El número " +  n1 + " es " + (esMayor ? "mayor " : "menor o igual ") + "que el numero " + n2; 
    // el numero 2 es

    return resultado; 
    }

    console.log (LimitesDeNumero (1,3)); 


LimitesDeNumero (2,3); //false 

var numeroUno = 1;


var arreglo = [ 10, 20, 30, 40, 50]; // debe ser del mismo tipo 
arreglo[0] = 11; 

console.log (arreglo[0]); 

//para que salga 10 
var arreglo = [ 10, 20, 30, 40, 50]; // debe ser del mismo tipo 

console.log (arreglo[0]); 


var arreglo = [ 10, 20, 30, 40, 50]; // debe ser del mismo tipo 
//arreglo [5] =60;
arreglo.push(60);
arreglo = arreglo.concat ([70,80,90,100])

console.log (arreglo); 




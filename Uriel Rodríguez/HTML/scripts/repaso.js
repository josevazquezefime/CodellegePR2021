function Suma(n1= 1, n2= 2){
    var suma= n1+n2; 
    return suma;
}

var suma = Suma(5, 6);
console.log(suma);

function NombreCompleto(nombre, apellidoPaterno, apellidoMaterno){
    var nombrecompleto= nombre+" "+apellidoPaterno+" "+apellidoMaterno;
    return nombrecompleto;
}

var nombrecompleto= NombreCompleto('Uriel','Rodríguez','Cortés')
console.log(nombrecompleto)

function LimitesDeNumeros (n1, n2){
    var esMayor=n1>n2;
    var resultado= "El número "+n1+" es "+(esMayor? "mayor":"menor igual que")+" que el número "+n2;
    return resultado;
}

console.log(LimitesDeNumeros(5,3));
console.log('esto viene de functions');
alert('Hola javascript'+ABC)
var edad;
edad = 21
var _edad = 21
console.log(_edad);
_edad = 'HOLANA';
console.log(edad);
console.log(_edad);
const PI = 3.141592654
console.log(PI);
var suma = 1 + 1;
console.log(suma);
var resta = 10 - 1;
console.log(resta);
var multiplicacion = 10 * 3;
console.log(multiplicacion);
var division = 12 / 5;
console.log(division);
var modulo = 12 % 5;
console.log(modulo);
var x = 10;
var z = 5;
var y = '10';
var suma = y - x;
console.log(suma);
var mayor = 5 > 10;
console.log(mayor);
var menor = 5 < 10;
console.log(menor);
var menorigual = 5 >= 5;
console.log(menorigual);
var menorigual = 6 <= 5;
console.log(menorigual);
var igual = 5 == '5';
console.log(igual);
var diferente = 5 != '5';
console.log(diferente);
var identico = 5 === 5;
console.log(identico);
var noidentico = 5 !== '5';
console.log(noidentico);
var listaAlumnos = ['Kevin Martin', 'Andres Ontiveros', 25];
console.log(listaAlumnos[0]);
console.log(listaAlumnos[1]);
console.log(listaAlumnos[2]);
console.log(listaAlumnos[3]);
console.log(listaAlumnos);

var alumno = {
    nombre: 'Andres',
    'apellido paterno': 'Ontiveros',
    sexo: 'H',
    edad: '23',
    curso: 'PR2011'
};
console.log(alumno['nombre']);
alumno['nombre'] = 'Mariell';
alumno['inexistente'] = 12345;
console.log(alumno.nombre);



var listaObjetos = [alumno];
console.log(listaObjetos[0]);
sumarNumeros(10, 20);
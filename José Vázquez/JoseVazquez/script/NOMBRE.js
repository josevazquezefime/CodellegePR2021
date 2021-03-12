function saludar(nombre)
{
    console.log('Hola, '+nombre);
}
saludar('José Vázquez');



var ComidaFavorita=['Tacos', 'Pizza', 'Sopa'];
console.log(ComidaFavorita[0]);
console.log(ComidaFavorita[1]);
console.log(ComidaFavorita[2]);
console.log('Mi comida favorita es '+ ComidaFavorita[0]);
console.log('La comida que menos me gusta es '+ ComidaFavorita[2]);


function Act4(){
var alumnos=[];
alumnos[0]={
    nombre: 'José',
    apellido: 'Vázquez',
    edad: 123,
    sexo:''
};

alumnos[1]={
    nombre: 'Kevin',
    apellido: 'Martin del Campo',
    edad: 123,
    sexo:''
};

alumnos[2]={
    nombre: 'Andres',
    apellido: 'Ontiveros',
    edad: 123,
    sexo:''
};
console.log(alumnos[0].nombre +' '+ alumnos[0].apellido)
console.log(alumnos[1].nombre +' '+ alumnos[1].apellido)
console.log(alumnos[2].nombre +' '+ alumnos[2].apellido)

}
Act4();
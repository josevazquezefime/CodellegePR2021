var nombre = "Paulina Herrera Padilla"
console.log(nombre);

function Saludar(nombre){
    console.log("Hola, " + nombre);
}
Saludar("Paulina");

var listaComida = ["Sushi", "Alitas", "Tacos"]

console.log("Mi comida favorita: " + listaComida[0])
console.log("Mi comida menos favorita: "+ listaComida[2])

function Act4(){
    var alumnos = [];
    alumnos[0]={
        nombre: "Paulina",
        apellido: "Herrera Padilla",
    }
    alumnos[1]={
        nombre:"Alejandro",
        apellido:"Diaz",
    }
    alumnos[2] ={
        nombre:"Fernanda",
        apellido:"De la Torre",
    }
    console.log(alumnos[0].nombre +" "+alumnos[0].apellido)
    console.log(alumnos[1].nombre +" "+alumnos[1].apellido)
    console.log(alumnos[2].nombre +" "+alumnos[2].apellido)

}
Act4();
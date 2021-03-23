var cumpleañeros = [
    {
        nombre: "Luis Salvador Arechiga Carranza",
        fecha: "22/11/1993",
        imagen: "images/Luis.jpg",
        regalos: "Me gustaria que me regalaran un Majin Vegeta",
        mostrarDetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaria que le regalen: " + this.regalos);
        }
    },

    {
        nombre: "Angel Andres Arechiga Carranza",
        fecha: "20/03/1999",
        imagen: "images/Angel.jpg",
        regalos: "Me gustaria que me regalaran un sonic",
        mostrarDetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaria que le regalen: " + this.regalos);
        }
    },
    {
        nombre: "Salvador Arechiga Alvarado",
        fecha: "15/08/1963",
        imagen: "images/Salvador.jpg",
        regalos: "Me gustaria que me regalaran una tele de 70 pulgadas",
        mostrarDetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Cumple el: " + this.fecha);
            console.log("Le gustaria que le regalen: " + this.regalos);
        }
    },
]

cumpleañeros[0].mostrarDetalles();
cumpleañeros[1].mostrarDetalles();

var edad=15;
var esMayor=edad > 17;

var tipoEdad = esMayor ? "Mayor de edad" : "Menor de Edad";
console.log(tipoEdad);

if(esMayor) {
    console.log(tipoEdad);
}else if(edad === 18) {
    console.log('Recien mayor de edad');
}else {
    console.log('Menor de edad');
}

for (var i = 0; i < cumpleañeros.length; i++) {
    const cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();
}


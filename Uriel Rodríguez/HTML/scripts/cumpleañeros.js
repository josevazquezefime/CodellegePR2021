var cumpleañeros=[];

cumpleañeros.push({
    nombre: "Uriel Alejandro Rodríguez Cortés",
    fecha: "24/07/1999",
    regalos: "Una cámara",
    mostrarDetalles: function(){
        console.log("Nombre: "+this.nombre);
        console.log("Fecha de nacimiento: "+this.fecha);
        console.log("Le gustaría de regalo: "+this.regalos);
    }
});

cumpleañeros.push({
    nombre: "Uriel Alejandro Rodríguez Cortés",
    fecha: "24/07/1999",
    regalos: "Una cámara",
    mostrarDetalles: function(){
        console.log("Nombre: "+this.nombre);
        console.log("Fecha de nacimiento: "+this.fecha);
        console.log("Le gustaría de regalo: "+this.regalos);
    }
});


for(var i=0; i< cumpleañeros.length; i++){
    const cumpleañero=cumpleañeros[i];
    cumpleañero.mostrarDetalles();
}

//ciclo while
var contador =1;

while(contador<10){
    console.log('ciclo while');
    contador++;
}

//ciclo do while
contador=1;

do {
    console.log('ciclo do while');
    contador++;
} while (contador<10)

function MostrarError(codigo=0){
    if (codigo===0){
        console.log("Ha ocurrido un código de error en la aplicación. Código de error: "+codigo);
    }   else if(codigo===2){
        console.log("No se pudo cargar la información. Código de error: "+codigo);
    }   else{
        console.log("El error no está definido");
    }
    switch(codigo){
        case 0:
            console.log("Ha ocurrido un código de error en la aplicación. Código de error: "+codigo);
            break;
        default:
            console.log("No se reconoce el error "+codigo);
            break;
    }
}
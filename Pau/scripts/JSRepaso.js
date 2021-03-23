function NombreCompleto(nombre, appellidoPaterno, apellidoMaterno){
   var nombreCompleto = nombre+" "+appellidoPaterno+" "+apellidoMaterno;  
   
   return nombreCompleto; 
}

var nombreCompleto = NombreCompleto('Paulina','Herrera','Padilla');
console.log(nombreCompleto)

var mascota ={
    raza: 'Golden Retriever',
    edad: 8,
    color: 'Dorado',
    tamaño: 'Grande',
    nombre: 'Chuck',
    ladrar:function(){
        console.log('Woof');
    }
};
mascota.ladrar();

var cumpleañeros = [
    {
        nombre: 'Paulina',
        fecha:'12/11/1996',
        regalos: 'Una laptop',
    }
]

for (var i=0;i<10;i++){
    document.write(i);
}
var titulo = document.getElementById("titulo")

//Eventos 
//Evento que permite saber cuando ya se termino de cargar el contenido 

window.onload = function (event) {
var titulo = document.getElementById("titulo");
titulo.innertext = "modificdo con JS"; 
}; 

window.addEventListener ("load", function(event){

});

function Revisar (texto, ejecutarAlgo) {
    if(texto === "exec") {
        ejecutarAlgo(); //CallBack 
    }
}

Revisar ("exec", function(){
    var x =0;

});

Revisar ("exec", function() {
    console.log("hola");
});

window.addEventListener ("load", function (event){
    var titulo = document.getElementById ("titulo");
    titulo.innertext = "modificado con 35";
    
}); 

$
//Jquery tiene dos formas de usar: 
//- como objeto con funciones de complemento 
// como funcion de apoyo y busqueda 

$(function(){
    //var titulo = document.getElementByID ("titulo"); 
    //titulo.innertext = "modificado con 35";
    $("#titulo").text ("modificado con Jquery"); 
    $("#otro").append ("<h2>Modificado</h2>"); 

    $("#otro li").text ("Encontrado"); 

}); 

//null - algo que se quiere utilizar existe pero no existe como un objeto o referencia establecida 

var x; //undefined
var x = null; //null 

// por fuera son casi igual pero por dentro - pero el null reserva cierto espacio en memoria para una variable 

//*window.document.body.innerText = "Hola";
//*window.document.body.innerHTML += "<div>Hola</div>"; //cambia por etiqeutas todo el body 


//Verbatim
//*window.document.body.innerHTML= `<div>Hola </div>`;
//todo es texto dentro de estas comillas 
//sobreescribir cualquier contenido 

//variables son nombres que identifican un valor
//los iguales asignan el valor

//*var ahorro =100
//*ahorro += 20; // ahorro = ahorro + 20; 


//*ahorro =ahorro  + 20  //=120
//*ahorro = ahorro + 50;  //170

//*var texto = "Hola"
//*texto = texto + " " + "Mundo"  //" " espacio 
//*texto += " " + "Mundo"  //simplificado 

//modificar etiqueta en especifico 

var h1_titulo = document.getElementById("titulo");

//se puede escribir directamente document tmbn sin usar el window 
//representa todo el elemento de HTLM

h1_titulo.innerText = "Título Dinámico";
h1_titulo.append("<div>Append</div>");

//h1_titulo.append ("<div>Append</div>")

var div = document.createElement("div");
div.innerText="Append";
h1_titulo.appendChild(div);


//afectar en grupo una lista 

var lis = document.getElementsByTagName ("li"); 
for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.innerText = "* " + innerText; 
}

var h1_ = document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagNameNS("span");
spans[1].innerHTML = "Lo encontré";
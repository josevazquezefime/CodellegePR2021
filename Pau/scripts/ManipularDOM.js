//var x = null;
//window.document.body.innerText = "Hola";//
//var h1_titulo = document.getElementById("titulo");
//h1_titulo.innerText="Titulo Dinámico"

//var div= document.createElement('div');
//div.innerText = 'Append :D'

//h1_titulo.appendChild(div);//

var lis = document.getElementsByTagName('li');
for (var i =0; i< lis.length; i++){
    const li =lis[i];
    li.innerText='* ' +li.innerText;
}
var h1_titulo=document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagName('span');
spans[1].innerText='Lo encontré';
import {
    Component
} from '@angular/core';

@Component({
    selector: 'catalogoRoot', //Asignar un nombre de etiqueta, unico
    templateUrl: './catalogo.component.html', //Asignar la ruta del archivo .html que representa esta vista
    styleUrls: ['./catalogo.component.css']
})


//Debemos asignarle el nombre de nuestro componente
//Ejemplo: Si se llama catalogo.components.ts, debemos exportar CatalogoComponents
export class CatalogoComponent { //Cambiar el nombre de AppComponent por el del nuestro
    numeroProductos = 10;
    numeroPaginas = 2;
    productos = [{name: 'iPhone 15 :0'}];
}
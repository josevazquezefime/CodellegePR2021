import {
  Component
} from '@angular/core';
declare var $:any;

@Component({
  selector: 'login', //Asignar un nombre de etiqueta, único
  templateUrl: './login.html', //Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./login.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
})

//Debemos asignarle el nombre de nuestro componente.
//Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
export class LoginComponent { //Cambiar el nombre de AppComponent por el del nuestro
    Login(){
        $.ajax({
            type: "POST",
            xhrFields: { //Esto permite compartir cookies
              withCredentials: true
            },
            url: 'http://localhost:666/users/login',
            data: {
              email: this.email,
              password: this.password
            },
            success: function (res: any) {
              console.log('Hizo login, ver cookies');
            },
            error: function(error: any) {
                console.log('No se inició sesión');
                console.log(error);
            }
          });
    }

    UpdateEmail(event: any) {
        this.email = event.target.value;
    }

    UpdatePassword(event: any) {
        this.password = event.target.value;
    }

    email = '';
    password = '';
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CatalogoComponent } from './catalogo.component'; //Se importa el componente
//Es importante asignar el nombre igual al que exportamos en el archivo component.ts

@NgModule({
    declarations: [
        CatalogoComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [CatalogoComponent]
})

export class CatalogoModule { }

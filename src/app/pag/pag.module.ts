import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncioSesionComponent } from './incio-sesion/incio-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagaComponent } from './paga/paga.component';
import { CompraComponent } from './compra/compra.component';



@NgModule({
  declarations: [
    IncioSesionComponent,
    QuienesSomosComponent,
    ContactoComponent,
    PagaComponent,
    CompraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IncioSesionComponent,
    QuienesSomosComponent,
    ContactoComponent,
    PagaComponent,
    CompraComponent
  ]
})
export class PagModule { }

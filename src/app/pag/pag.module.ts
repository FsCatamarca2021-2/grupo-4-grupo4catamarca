import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncioSesionComponent } from './incio-sesion/incio-sesion.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TranferenciaComponent } from './transferencia/tranferencia.component';
import { DivisasComponent } from './divisas/divisas.component';



@NgModule({
  declarations: [
    IncioSesionComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TranferenciaComponent,
    DivisasComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IncioSesionComponent,
    QuienesSomosComponent,
    ContactoComponent,
    TranferenciaComponent,
    DivisasComponent,
    
  ]
})
export class PagModule { }

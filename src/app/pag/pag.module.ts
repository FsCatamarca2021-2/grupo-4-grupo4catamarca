import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncioSesionComponent } from './incio-sesion/incio-sesion.component';



@NgModule({
  declarations: [
    IncioSesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IncioSesionComponent
  ]
})
export class PagModule { }

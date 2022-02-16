import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada.component';



@NgModule({
  declarations: [
    RegistroComponent,
    EntradaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RegistroComponent,
    EntradaComponent]
})
export class FormsModule { }

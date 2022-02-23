import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada.component';

@NgModule({
    declarations: [ EntradaComponent,RegistroComponent
    ],
    imports:[
        CommonModule
    ],
  })
  export class FormsModule { }


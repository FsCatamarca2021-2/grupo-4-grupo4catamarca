import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ 
        EntradaComponent,
        RegistroComponent,
    ],
    imports:[ReactiveFormsModule,
        CommonModule,
    ],
    exports:[
        RegistroComponent,
        EntradaComponent,

    ]
  })
  export class FormsModule { }


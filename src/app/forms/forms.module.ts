import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ 
        EntradaComponent,
        RegistroComponent,
    ],
    imports:[ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports:[
        RegistroComponent,
        EntradaComponent,

    ]
  })
  export class FormulariosModule { }


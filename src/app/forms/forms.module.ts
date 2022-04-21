import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [ 
        EntradaComponent,
        RegistroComponent,
    ],
    imports:[HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    exports:[
        RegistroComponent,
        EntradaComponent,

    ]
  })
  export class FormulariosModule { }


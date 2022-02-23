import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [HeaderComponent, InicioComponent  ],
  imports: [ 
    CommonModule
    ],
  exports: [HeaderComponent,
    InicioComponent]
})
export class SharedModule { }

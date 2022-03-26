import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagModule } from '../pag/pag.module';

import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    HeaderComponent, 
    InicioComponent, 
    FooterComponent,
    ],
  imports: [ 
    CommonModule,
    FormsModule,
    PagModule,
    ],
  exports: [
    HeaderComponent,
    InicioComponent,
    FooterComponent,
  ]
})
export class SharedModule { }

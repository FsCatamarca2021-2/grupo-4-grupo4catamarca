import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagModule } from '../pag/pag.module';

import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PagModule } from '../pag/pag.module';





@NgModule({
<<<<<<< HEAD
  declarations: [
    HeaderComponent, 
    InicioComponent, 
    FooterComponent,
=======
  declarations: [HeaderComponent, InicioComponent, FooterComponent  ],
  imports: [FormsModule,
    PagModule, 
    CommonModule
>>>>>>> 991d1d095d5dd36e38125014544e094b2615b8b6
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

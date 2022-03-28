import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
<<<<<<< HEAD
    HeaderComponent,
     InicioComponent, 
     FooterComponent,
    ],
  imports: [
    FormsModule,
    PagModule, 
    CommonModule,
  ],
=======
    HeaderComponent, 
    InicioComponent, 
    FooterComponent,],

  imports: [FormsModule,
    PagModule, 
    CommonModule
    ],
>>>>>>> 23479d432146b13227525f83f4f8c8bf32d5af14
  exports: [
    HeaderComponent,
    InicioComponent,
    FooterComponent,
  ],
})
export class SharedModule { }

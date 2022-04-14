import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { FormulariosModule } from '../forms/forms.module';
import { PagModule } from '../pag/pag.module';



@NgModule({
  declarations: [
    HeaderComponent,
     InicioComponent, 
     FooterComponent,
    ],
  imports: [
    FormulariosModule,
    PagModule, 
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    InicioComponent,
    FooterComponent,
  ],
})
export class SharedModule { }

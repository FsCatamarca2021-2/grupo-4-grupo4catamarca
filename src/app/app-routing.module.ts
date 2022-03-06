import { NgModule } from '@angular/core';
import { RouterModule, Routes,} from '@angular/router';
import { EntradaComponent } from './forms/entrada/entrada.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { ContactoComponent } from './pag/contacto/contacto.component';
import { QuienesSomosComponent } from './pag/quienes-somos/quienes-somos.component';



const routes: Routes = [
  {path:'ingreso', component: EntradaComponent},
  {path:'registro', component: RegistroComponent},
  {path:'quienes_somos', component: QuienesSomosComponent},
  {path:'contacto', component: ContactoComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

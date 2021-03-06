import { NgModule } from '@angular/core';
import { RouterModule, Routes,} from '@angular/router';
import { EntradaComponent } from './forms/entrada/entrada.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { ContactoComponent } from './pag/contacto/contacto.component';
import { QuienesSomosComponent } from './pag/quienes-somos/quienes-somos.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './shared/inicio/inicio.component';
import { IncioSesionComponent } from './pag/incio-sesion/incio-sesion.component';
import { TranferenciaComponent } from './pag/transferencia/tranferencia.component';
import { DivisasComponent } from './pag/divisas/divisas.component';



const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:'header', component:HeaderComponent},
  {path:'entrada', component: EntradaComponent},
  {path:'registro', component: RegistroComponent},
  {path:'quienes_somos', component: QuienesSomosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'principal', component:InicioComponent},
  {path:'iniciodesesion', component:IncioSesionComponent},
  {path:'transferencia', component:TranferenciaComponent},
  {path:'divisas',component:DivisasComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }

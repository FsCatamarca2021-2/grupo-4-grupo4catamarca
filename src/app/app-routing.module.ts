import { NgModule } from '@angular/core';
import { RouterModule, Routes,} from '@angular/router';
import { EntradaComponent } from './forms/entrada/entrada.component';
import { RegistroComponent } from './forms/registro/registro.component';
import { PagaComponent } from './pag/paga/paga.component';

const routes: Routes = [
  {path:'ingreso', component: EntradaComponent},
  {path:'registro', component: RegistroComponent},
  {path:'paga', component: PagaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

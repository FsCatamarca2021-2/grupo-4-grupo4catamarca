import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistroComponent } from '../forms/registro/registro.component';
import { EntradaComponent } from '../forms/entrada/entrada.component';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  
  
  constructor( private httpClient: HttpClient ) { }

 registrocliente (clientes:any): Observable<any>{
  return this.httpClient.post('/clientes/guardarcliente',clientes)
 

 }
}
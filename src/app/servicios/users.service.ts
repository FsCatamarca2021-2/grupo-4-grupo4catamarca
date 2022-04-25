import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { RegistroComponent } from '../forms/registro/registro.component';
import { Cliente } from '../forms/registro/Cliente';
import { IngresoCliente } from '../forms/entrada/ingresobjeto';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
 

  
  constructor( private httpClient: HttpClient )
  {}

 crearcliente (oCliente:Cliente ){
  return this.httpClient.post('/clientes/guardarcliente',oCliente)
            .pipe(
              map ((resp:any)=>{
                oCliente.IdCliente=resp.Nombre;
                return oCliente;
              })
            );
 

 }
 ingresocliente(Mail:string,Contrasena: string){
  return this.httpClient.post('/clientes/ingresocliente', {Mail, Contrasena})
 }
}
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistroComponent } from '../forms/registro/registro.component';
import { Cliente } from '../forms/registro/Cliente';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  
  constructor( private httpClient: HttpClient ) { }

 crearcliente (oCliente:Cliente ){
  return this.httpClient.post('/clientes/guardarcliente',oCliente)
            .pipe(
              map ((resp:any)=>{
                oCliente.IdCliente=resp.Nombre;
                return oCliente;
              })
            );
 

 }
}
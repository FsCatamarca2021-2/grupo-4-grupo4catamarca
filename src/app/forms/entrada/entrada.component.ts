import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,FormControl } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import { Router } from '@angular/router';
import { IngresoCliente } from './ingresobjeto';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
 Mail!:string;
 Contrasena!:string; 
  Ingreso!:FormGroup;
  
  
  constructor(private formBuilder :FormBuilder,
              public userService: UsersService,
              public router: Router) {this.buildForm(); }

   

  ngOnInit(): void {}
    
  private buildForm(){
    this.Ingreso = this.formBuilder.group({
      Mail: ['', [Validators.required]],
      Contrasena: ['', [Validators.required]]
  });}

 ingreso(Mail: string,Contrasena: string){
  Mail= this.Ingreso.value.Mail 
  Contrasena= this.Ingreso.value.Contrasena
  if (this.Ingreso.valid ){ 
  console.log("ingresando");
  this.userService.ingresocliente(Mail,Contrasena)
  

 }}}
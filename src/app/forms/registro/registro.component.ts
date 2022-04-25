import { ThisReceiver } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup, EmailValidator,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/servicios/users.service';
import { HttpClient } from '@angular/common/http';
import { switchAll } from 'rxjs';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 oCliente!: FormGroup;
 
    
 constructor(private formBuilder: FormBuilder,
              public usersService: UsersService,
              private Router: Router,) 
 {this.buildForm(); 
}


  ngOnInit(): void {
  }
  
  private buildForm( )  { 
    this.oCliente  = this.formBuilder.group ({ 
      Nombre : ['',  [Validators.required]] ,
      Apellido: ['',[Validators.required]], 
      dni : ['',  [ Validators.required ,Validators.maxLength(8)]] , 
      Mail : ['', [Validators.required,Validators.email ]] , 
      Contrasena :['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(15),] ], 
      direccion:['',[Validators.required]],
      
      
    });
    this.oCliente.valid
    this.oCliente.invalid
       }
  save(oCliente:Event) {
   oCliente.preventDefault();
    if (this.oCliente.valid){
      const value = this.oCliente.value;
      console.log("enviando al servidor...");
      console.log(value)
      this.usersService.crearcliente(this.oCliente.value)
      .subscribe(resp=> {
        console.log(resp);
        console.log('redireccionar'); 
        this.Router.navigateByUrl('entrada');
      })

  }}}
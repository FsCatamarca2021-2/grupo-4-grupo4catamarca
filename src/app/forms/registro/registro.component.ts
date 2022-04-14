import { ThisReceiver } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup, EmailValidator,FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 form!: FormGroup;
 nombre!: string;
    
 constructor(private formBuilder: FormBuilder) 
 {this.buildForm(); 
}


  ngOnInit(): void {
  }
  private buildForm( )  { 
    this.form  = this.formBuilder.group ({ 
      nombre : ['',  [Validators.required]] ,
      apellido: ['',[Validators.required]], 
      dni : ['',  [ Validators.required ,Validators.maxLength(8)]] , 
      mail : ['', [Validators.required,Validators.email ]] , 
      contraseña :['' ,[Validators.required,Validators.minLength(10),Validators.maxLength(15),] ], 
      direccion:['',[Validators.required]],
      provincia:['', [Validators.required]],
      
    });
    this.form.valid
    this.form.invalid
       }
  save(event:Event) {
   event.preventDefault();
   if (this.form.valid){
    const value = this.form.value;
    console.log(value);
   }
   } 
}



import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  email!: string;
  password!:string;
  
  constructor() { }

  
  login(){
  console.log(this.email);
  console.log(this.password);}
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EntradaComponent } from 'src/app/forms/entrada/entrada.component';
import { RegistroComponent } from 'src/app/forms/registro/registro.component';
import { QuienesSomosComponent } from 'src/app/pag/quienes-somos/quienes-somos.component';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
  }

} 


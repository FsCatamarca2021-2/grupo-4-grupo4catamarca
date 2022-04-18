import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/servicios/users.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
  }}

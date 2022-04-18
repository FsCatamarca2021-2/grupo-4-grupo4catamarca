import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  email!: string;
  password!:string;
  usersService: any;
  
  constructor(public userService: UsersService, public router: Router) { }

  
  login(){
    const user = { email: this.email, password: this.password };
    this.usersService.login(user).subscribe(
      (    data: { token: any; }) => {
    this.usersService.setToken(data.token);
    this.router.navigateByUrl('/');
  },
      (  error: any) =>{
    console.log(error);
  });
}
  ngOnInit(): void {
  };

}

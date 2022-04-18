import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulariosModule } from './forms/forms.module';
import { PagModule } from './pag/pag.module';
import { SharedModule } from './shared/shared.module';
import { UsersService } from './servicios/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,  
  ],
   exports:[
    AppComponent,
  ],
  imports:[ HttpClientModule,
    ReactiveFormsModule,
    FormulariosModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

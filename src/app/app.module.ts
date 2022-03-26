import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from './forms/forms.module';
import { PagModule } from './pag/pag.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,  
  ],
   exports:[
    AppComponent,
  ],
  imports:[
    FormsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    PagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

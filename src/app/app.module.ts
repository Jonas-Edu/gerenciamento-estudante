import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEstudanteComponent } from './components/add-estudante/add-estudante.component';
import { EditEstudanteComponent } from './components/edit-estudante/edit-estudante.component';
import { ListEstudanteComponent } from './components/list-estudante/list-estudante.component';
import { LoginEstudanteComponent } from './components/login-estudante/login-estudante.component';
import { RegistrationEstudanteComponent } from './components/registration-estudante/registration-estudante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddEstudanteComponent,
    EditEstudanteComponent,
    ListEstudanteComponent,
    LoginEstudanteComponent,
    RegistrationEstudanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

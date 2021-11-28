import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEstudanteComponent } from './components/add-estudante/add-estudante.component';
import { EditEstudanteComponent } from './components/edit-estudante/edit-estudante.component';
import { ListEstudanteComponent } from './components/list-estudante/list-estudante.component';
import { LoginEstudanteComponent } from './components/login-estudante/login-estudante.component';
import { RegistrationEstudanteComponent } from './components/registration-estudante/registration-estudante.component';


const routes: Routes = [
  {
    path:'add',
    component: AddEstudanteComponent
  },
  {
    path:'edit/:id',
    component: EditEstudanteComponent
  },
  {
    path:'list',
    component: ListEstudanteComponent
  },
  {
    path: 'login',
    component: LoginEstudanteComponent
  },
  {
    path:'register',
    component: RegistrationEstudanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

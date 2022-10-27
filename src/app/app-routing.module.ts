import { TimeDeleteComponent } from './componentes/time/time-delete/time-delete.component';
import { TimeUpdateComponent } from './componentes/time/time-update/time-update.component';
import { TimeCreateComponent } from './componentes/time-create/time-create.component';
import { TimeCrudComponent } from './views/time-crud/time-crud.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
  path:"",
  component: HomeComponent
  },{
  path:"times",
  component: TimeCrudComponent
  },{
    path: "times/create",
    component: TimeCreateComponent
  },{
    path: "times/update/:id",
    component: TimeUpdateComponent
  },{
    path: "times/delete/:id",
    component: TimeDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

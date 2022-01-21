import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpRegisterComponent } from './emp-register/emp-register.component';

const routes: Routes = [
  {
    path:"empForm",
    component:EmpRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

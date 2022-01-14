import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './products/clothing/clothing.component';
import { ElectronicComponent } from './products/electronic/electronic.component';
import { GroceryComponent } from './products/grocery/grocery.component';
import { LoginComponent } from './login/login.component';
import { CustomerRegisterComponent } from '../Customer/customer-register/customer-register.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from '../Customer/profile/profile.component';
import { CartComponent } from '../Customer/cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'clothings',
    component:ClothingComponent
  },
  {
    path:'electronics',
    component:ElectronicComponent
  },
  {
    path:'grocerys',
    component:GroceryComponent
  },
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'register',
    component:CustomerRegisterComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

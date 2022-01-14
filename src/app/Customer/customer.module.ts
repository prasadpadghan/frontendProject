import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [

  
    CustomerRegisterComponent,
        ProfileComponent,
        CartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  exports:[CustomerRegisterComponent,ProfileComponent]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SalesComponent } from './sales/sales.component';
import { CustComponent } from './cust/cust.component';
import { ProdComponent } from './prod/prod.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EmployeeModule } from '../Employee/employee.module';


@NgModule({
  declarations: [
    AdminComponent,
    SalesComponent,
    CustComponent,
    ProdComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    EmployeeModule
  ],exports:[AdminComponent]
})
export class AdminModule { }

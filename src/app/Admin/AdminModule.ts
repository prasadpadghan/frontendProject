import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SalesComponent } from './sales/sales.component';
import { CustComponent } from './cust/cust.component';
import { ProdComponent } from './prod/prod.component';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeModule } from '../Employee/employee.module';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpServiceService } from '../common/emp-service.service';
@NgModule({
  declarations: [
    AdminComponent,
    SalesComponent,
    CustComponent,
    ProdComponent,
    EmpRegisterComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    EmployeeModule,
    FormsModule,
    HttpClientModule,
    // FormBuilder,
    ReactiveFormsModule
  ],
  providers:[EmpServiceService]
  ,exports: [AdminComponent,FormsModule,ReactiveFormsModule]
})
export class AdminModule { }

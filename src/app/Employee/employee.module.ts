import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmpPannelComponent } from './emp-pannel/emp-pannel.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LatestProdComponent } from './latest-prod/latest-prod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmpPannelComponent,
    AddProductComponent,
    LatestProdComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
    
  
  ],
  exports:[EmployeeComponent,EmpPannelComponent]
})
export class EmployeeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './Home/home.module';
import { CustomerModule } from './Customer/customer.module';
import { ProductsModule } from './Home/products/products.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from './Admin/admin.module';
import { EmployeeModule } from './Employee/employee.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    CustomerModule,
    ProductsModule,
    FontAwesomeModule,
    AdminModule,
    EmployeeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

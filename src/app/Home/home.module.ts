import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductsModule,
    FormsModule,
    MatPaginatorModule,
    
    // MatIconModule,
    // FontAwesomeModule,
    // AngularFontAwesomeModule

  ],
  exports: [LoginComponent, NavbarComponent,MainComponent]
})
export class HomeModule { }

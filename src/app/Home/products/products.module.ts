import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ElectronicComponent } from './electronic/electronic.component';
import { ClothingComponent } from './clothing/clothing.component';
import { GroceryComponent } from './grocery/grocery.component';


@NgModule({
  declarations: [
    ElectronicComponent,
    ClothingComponent,
    GroceryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],exports:[ElectronicComponent,ClothingComponent,GroceryComponent]
})
export class ProductsModule { }

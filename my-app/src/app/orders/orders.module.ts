import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../products/products.module';
import { ProductListComponent } from '../products/product-list/product-list.component';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductsModule
  ], 
  exports: [ProductListComponent]
})
export class OrdersModule { }

import {  AfterViewInit, Component, ViewChild} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.name);
    }
  }

  // Empty variable to store selected item
  selectedProduct = 'Microphone';


  // Binding so we can communicate between our two components
  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct}`);
  }

  // We query a child componenent from the parent component class
  // When we query the productDetail property, we get an instance of the ProductDetailComponent class. 
  // We can then access any memeber of its public API, such as the name property
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
}

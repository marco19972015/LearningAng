import {  AfterViewInit, Component, ViewChild} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  // Create a array so we can use the ngFor directive to display the product list in a more scalable way
  products = ['Webcam', 'Microphone', 'Wireless keyboard']

  // Check if the productDetail property has been set
  ngAfterViewInit(): void {
    if (this.productDetail) {  // When we query the productDetail property, we get an instance of a ProductDetailComponent class
      console.log(this.productDetail.name);  //  We can then access any member of its public API such as the name property
    }
  }

  // Empty variable to store selected item
  // Investigate the reassining the variable property 
  selectedProduct = '';


  // Binding so we can communicate between our two components
  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct}`);
  }

  // We query a child componenent from the parent component class
  // When we query the productDetail property, we get an instance of the ProductDetailComponent class. 
  // We can then access any memeber of its public API, such as the name property
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  // This trackByProducts accepts two parameters with index of type number and a name of type string
  trackByProducts(index: number, name:string): string {
    // We return the actual product nam
    return (name)
    ;
  }
}

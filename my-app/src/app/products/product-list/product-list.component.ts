import {  AfterViewInit, Component, ViewChild} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {

  // Create a array so we can use the ngFor directive to display the product list in a more scalable way
  // products = ['Webcam', 'Microphone', 'Wireless keyboard']

  // Check if the productDetail property has been set
  ngAfterViewInit(): void {
    if (this.productDetail) {  // When we query the productDetail property, we get an instance of a ProductDetailComponent class
      console.log(this.productDetail.product);  //  We can then access any member of its public API such as the name property
    }
  }

  // We now need to accommodate our interface
  selectedProduct: Product | undefined;  // Selected product will return a product or undefined
  // Create an array with objects that meet our Product interface
  products: Product[] = [
    {
      name: 'Webcam',
      price: 100
    },
    {
      name: 'Microphone',
      price: 200
    },
    {
      name: 'Wireless keyboard',
      price: 85
    }
  ];



  // Binding so we can communicate between our two components
  onBuy(name: string) {
    // The ? is used because we are accessing the selectedProduct property of the name object
    // If the name is null or undefined, instaed of throwing an error, it will return undefined
    // This is useful to prevent a TypeError from being thrown if name is not defined or null
    window.alert(`You just bought ${this.selectedProduct?.name}!`);  
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

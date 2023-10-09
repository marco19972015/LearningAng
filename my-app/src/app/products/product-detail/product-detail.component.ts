import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange ,ViewEncapsulation, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,  // Setting the ViewEncapsulation to none will allow the css style to leak out 
  changeDetection: ChangeDetectionStrategy.OnPush  // Will trigger the change detection mechanism only when the reference of the name input property changes
})
export class ProductDetailComponent implements OnChanges{

  // We use Input decorator to initialize an empty string initially set to variable name
  // Now that we use the service we set the product and assigned the interface Product 
  @Input() product: Product | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];  // We change the array from name to product to match our new type
    if (!product.isFirstChange()){  // if we selected a product then log out the old and new value
      const oldValue = product.previousValue.name;  // old value currently contains the Microphone (added the name variable)
      const newValue = product.currentValue.name;  // new value becomes what we click on
      console.log(`Product change from ${oldValue} to ${newValue}`);
    }
  }

  // We use Output decorator and it is initialized to a new EventEmitter 
  @Output() bought = new EventEmitter<string>();

  // Method to show what was bought
  buy() {
    this.bought.emit(this.product?.name);
  }
}

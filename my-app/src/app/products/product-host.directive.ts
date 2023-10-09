// The ViewContainerRef artifact will give us access to the view container that will holst the dynamically created component
import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit {

  // We inject our ViewContainerRef ng service into the construtor to make it available to our directive
  constructor(private vc: ViewContainerRef) { }

  ngOnInit(): void {
    // We call its createComponent method, passing the type of the ProductDetailComponent class as a parameter to create a product detail component
    const productRef = this.vc.createComponent(ProductDetailComponent);
    // We use the setInput method in the created component reference to pass a value to the input property binding of the product detail component 
    productRef.setInput('product', {
      name: 'Optical mouse',
      price: 130
    });
  }

}

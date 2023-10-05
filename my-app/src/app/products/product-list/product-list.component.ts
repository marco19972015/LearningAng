import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // Empty variable to store selected item
  selectedProduct = 'Microphone';


  // Binding so we can communicate between our two components
  onBuy(name: string) {
    window.alert(`You just bought ${this.selectedProduct}`);
  }
}

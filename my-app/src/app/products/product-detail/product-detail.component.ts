import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  // We use Input decorator to initialize an empty string
  @Input() name = '';

  // We use Output decorator and it is initialized to a new EventEmitter 
  @Output() bought = new EventEmitter<string>();

  // method to show what was bought
  buy() {
    this.bought.emit(this.name);
  }

}

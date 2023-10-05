import { Component, Input, OnInit ,Output, EventEmitter, OnChanges, SimpleChange ,ViewEncapsulation, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,  // Setting the ViewEncapsulation to none will allow the css style to leak out 
  changeDetection: ChangeDetectionStrategy.OnPush  // Will trigger the change detection mechanism only when the reference of the name input property changes
})
export class ProductDetailComponent implements OnInit, OnChanges{

  
  // The name saved in selected product won't show due to being undefined before string interpolation
  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }

  // The name of selectedProduct will show here
  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`);
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product change from ${oldValue} to ${newValue}`);
  }

  // We use Input decorator to initialize an empty string
  @Input() name = '';

  // We use Output decorator and it is initialized to a new EventEmitter 
  @Output() bought = new EventEmitter<string>();

  // Method to show what was bought
  buy() {
    this.bought.emit(this.name);
  }

  // Create a getter to log out the selected product
  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;

  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';  // Import the product interface so we can use it

// The @Pipe is considered a TypeScript class
@Pipe({
  name: 'sort'  // The only required property in the @Pipe is the name of the Pipe
})
export class SortPipe implements PipeTransform {

  // A pipe must also implement the transform method of the PipeTransform interface that accepts two parameters
  // Unkown type will not let us apply arbitrary operations to unknown values, such as calling a method, unless we perform type-checking first
  transform(value: Product[]): Product [] {  // Value of type unknown (similiar to any) and and optional args 
    if (value) {  // The value is currently an array of objects (name and price)
      // value currently hold 3 instances of our object 
      return value.sort((a: Product, b: Product) => {  // a holds micro, wireless key and wireless key | b holds webcam, micro, and webcam
        if (a.name < b.name){ // Here we compare micro vs webcam and return either true or false      
          return -1; // if a.name is less than b.name then it is false
        } else if (b.name < a.name){  // else b.name is less then a.name 
          return 1;  // return true and add to our sorted array
        }
        return 0;  // not returning anything new so we return 0
      });
    }
    return [];  // return the sorted array
  }

}

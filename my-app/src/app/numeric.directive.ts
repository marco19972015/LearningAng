import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumeric]'
})
export class NumericDirective {

  // Define a currentClass property using the @HostBinding decorator to bind the class 
  // propery of the input element
  @HostBinding('class') currentClass = '';

  // Define an onKeyPress method using the @HostListener decorator to bind to the keypress 
  // native event of the input element
  // @HostListener takes in two parameters (eventName, and args)
  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0); // Stores the current keystroke in $event which is the current event object
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {  // Does a logic check on it
      this.currentClass = 'invalid';  // if there are no numeric char then this is invalid and therefore red 
      event.preventDefault();
    } else {
      this.currentClass = 'valid'  // else then we have places numeric values and it will be green
    }
  }


  constructor() { }

}

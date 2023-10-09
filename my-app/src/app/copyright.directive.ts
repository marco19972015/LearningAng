import { Directive, ElementRef } from '@angular/core';

// This is a class marked with the @Directive decorator and contains a selector property 
@Directive({
  // The selector works similarly to the component selector
  // The only difference is that we surround it in square brackets
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetEl: HTMLElement = el.nativeElement;
    targetEl.classList.add('copyright');
    targetEl.textContent = `Copyright @${currentYear} All Rights Reserved.`;
   }

}

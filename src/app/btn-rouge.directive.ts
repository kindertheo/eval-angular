import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnRouge]'
})
export class BtnRougeDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "#990000"
    elementRef.nativeElement.style.padding = "10px 50px"
    elementRef.nativeElement.style.border = "solid gray 1px"
    elementRef.nativeElement.style.borderRadius = "3px"
    elementRef.nativeElement.style.color = "white"
  }

}

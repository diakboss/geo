import { Directive } from '@angular/core';

@Directive({
  selector: '[parallax]' ,
  host:{
    '(ionScroll)':'onCntscroll(seven)',
  }
})
export class ParallaxDirective {

  constructor() {
  }

}

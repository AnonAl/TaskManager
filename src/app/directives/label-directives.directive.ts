import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appLabelDirectives]'
})
export class LabelDirectivesDirective {

  constructor(private element: ElementRef, private render: Renderer2) {
    this.render.setStyle(element.nativeElement, 'text-align', 'left');
    this.render.setStyle(element.nativeElement, 'margin-left', '16px');
    this.render.setStyle(element.nativeElement, 'margin-top', '0');
    this.render.setStyle(element.nativeElement, 'color', 'red');
    this.render.setStyle(element.nativeElement, 'font-size', '14px');
  }

}

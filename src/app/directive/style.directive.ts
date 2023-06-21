import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '30px');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', null);
  }
}

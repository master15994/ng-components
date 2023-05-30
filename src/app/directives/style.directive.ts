import { style } from '@angular/animations';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(public el: ElementRef, public r: Renderer2) {}

  @Input('appStyle') color: string = 'yellow';
  @Input()
  dStyle!: {
    border: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: string;
    padding: string;
  };

  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    this.r.setStyle(
      this.el.nativeElement,
      'borderRadius',
      this.dStyle.borderRadius
    );
    this.r.setStyle(this.el.nativeElement, 'fontSize', this.dStyle.fontSize);
    this.r.setStyle(
      this.el.nativeElement,
      'fontWeight',
      this.dStyle.fontWeight
    );
    this.r.setStyle(this.el.nativeElement, 'padding', this.dStyle.padding);
  }

  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.r.setStyle(this.el.nativeElement, 'fontSize', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'padding', null);
  }
}

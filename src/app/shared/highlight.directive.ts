import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      '#FEF5E7'
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      '#F5B041 1.5px solid'
    );
    this.renderer.setStyle(this.element.nativeElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '1.5rem');
  }
}

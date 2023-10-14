import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererBasicHighlight]'
})
export class RendererBasicHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
  }
}

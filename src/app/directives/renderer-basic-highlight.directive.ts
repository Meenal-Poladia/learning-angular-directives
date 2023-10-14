import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererBasicHighlight]'
})
export class RendererBasicHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appRendererBasicHighlight') highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }
  ngOnInit() {
    this.backgroundColor = 'peach';
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'orange');
    this.backgroundColor = this.highlightColor;

  }
}

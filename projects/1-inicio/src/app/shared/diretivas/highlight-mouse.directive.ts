import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]',
})
export class HighlightMouseDirective {
  //   @HostListener('mouseenter') onMouseOver() {
  //     this._renderer.setStyle(
  //       this._elementRef.nativeElement,
  //       'background-color',
  //       'blue'
  //     );
  //   }
  //   @HostListener('mouseleave') onMouseOut() { /*esse metodos eu que escolhi*/
  //     this._renderer.setStyle(
  //       this._elementRef.nativeElement,
  //       'background-color',
  //       'transparent'
  //     );
  //   }
  // Tem essa maneira e tem essa

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = 'transparent';
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  constructor(/* private _elementRef: ElementRef, private _renderer: Renderer2*/) {}
}
// Dessa maneira so precisa importar o Listener
// Host fica escutando

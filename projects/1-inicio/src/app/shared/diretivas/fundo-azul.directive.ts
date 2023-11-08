import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFundoAzul]',
  // selector: 'p[appFundoAzul]', se colocar a tag ali na frente vc pode escolher
  // em qual apenas vai funcionar
})
export class FundoAzulDirective {
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    console.log(this._elementRef);
    this._elementRef.nativeElement.style.backgroundColor = 'blue';
    // Nao se deve usar dessa maneira pois nao é segura
    // Deve se utilizar o Renderer
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'backgroundColor',
      'blue'
    );
    // Dessa maneira é a forma segura
  }
}

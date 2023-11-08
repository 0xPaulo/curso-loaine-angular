import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
// Essa aula nao deu muito certo
// oninit nao foi mais rapido que o html, meio que nao serve de nada
// colocar um input la e um init aqui
// la vai ser primeiro
// HostListener escuta o elemento
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.customColor;
  }
  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() defaultColor: string = 'transparent';
  @Input() customColor: string = 'red';

  constructor() {}
  ngOnInit() {
    this.backgroundColor = 'black';
  }
}

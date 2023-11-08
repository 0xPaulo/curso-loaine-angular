import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss'],
})
export class DiretivaNgClassComponent {
  favorito: boolean = false;
  // Poderia chamar essa funçao com o (click)
  onClick() {
    this.favorito = !this.favorito;
  }
}

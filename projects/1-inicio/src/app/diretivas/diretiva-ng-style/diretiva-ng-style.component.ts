import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss'],
})
export class DiretivaNgStyleComponent {
  ativo: boolean = false;
  tamanhoFonte: string = '';
  // O ngStyle ta no componente, aqui eu so compliquei oq nao precisava
  erroMsg: string = '';
  mostrarErroMsg: boolean = false;

  atualizar(item: string) {
    // formata pra numero a string
    const numero = parseInt(item, 10);

    if (!isNaN(numero)) {
      // nao é um notNumber logo string
      this.tamanhoFonte = numero.toString();
      this.mostrarErroMsg = false;
    } else {
      this.erroMsg = 'Por favor, insira um numero';
      this.mostrarErroMsg = true;
    }
  }
}

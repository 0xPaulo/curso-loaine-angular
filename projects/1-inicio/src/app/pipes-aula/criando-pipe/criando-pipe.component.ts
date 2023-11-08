import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-criando-pipe',
  templateUrl: './criando-pipe.component.html',
})
export class CriandoPipeComponent {
  livros: string[] = ['Angular 2', 'Java'];
  filtro: string = '';

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos em JavaScript',
    rating: 4.21341,
    numeroPaginas: 300,
    preco: 49.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.google.com/',
  };

  addCurso(valor: any) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  // usando esse metodo inves do pipe
  getLivros() {
    console.log('metodo getLivros chamado');
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      console.log('Condições iniciais satisfeitas');
      console.log('Retornando todos os livros:', this.livros);
      return this.livros;
    }
    const livrosFiltrados = this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        // Verificar se um livro atende ao critério de filtro
        console.log(`Livro ${v} atende ao critério de filtro`);
        return true;
      } else {
        // Verificar quais livros são filtrados
        console.log(`Livro ${v} não atende ao critério de filtro`);
        return false;
      }
    });
    // Verificar os livros que passaram pelo filtro
    console.log('Livros após filtro:', livrosFiltrados);
    return livrosFiltrados;
  }
  // v é transformado em lower oq estiver no filtro tambem e ai sao comparados
  // com o indexOf, que vai retornar o numero aonde eles sao iguais
  // se for maior ou = 0 volta true e a palavra fica no array para aparecer
  // caso for -1 ela sai do array e nao aparece no filtro
  // os true e false nao retorna no metodo isso é dentro do filter
  // pra ele saber oq fica salvo ou nao
  // ele vai retornar um array

  // let frase = "Isso é uma frase de exemplo.";
  // let posicao = frase.indexOf("palavra");

  // console.log(posicao); // Saída: -1

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assincrono'), 3000);
  });

  valorAsync2 = interval(2000).pipe(map((valor) => 'valor assíncrono 2'));
  // o uso do pipe aqui é para usar o map e outros, ele junta os filtros
}

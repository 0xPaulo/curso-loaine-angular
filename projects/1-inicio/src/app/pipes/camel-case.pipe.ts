import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(argumento: any): any {
    let palavras = argumento.toLowerCase().split(' ');
    // console.log(palavras);

    let result = '';

    for (let palavra of palavras) {
      result += this.capitalize(palavra) + ' ';
    }

    return result;
  }
  capitalize(palavra: string) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    // ficou meio confuso essa parte
    // primeiro tu tira so a primeira letra e da upper
    // depois tu pega o restante da palavra e + junta
  }
}

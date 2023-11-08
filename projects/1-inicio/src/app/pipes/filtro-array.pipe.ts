import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  // aqui iria o pure = false
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value || !args || args.length === 0) {
      return value;
    }

    const filter = (args[0] as string).toLowerCase(); // Pega o primeiro argumento e converte para minúsculas

    if (Array.isArray(value)) {
      return value.filter(
        (v: string) => v.toLowerCase().indexOf(filter) !== -1
      );
    }
    return value;
  }
}
// devido a performance isso aqui teria que acontecer no component e nao no pipe

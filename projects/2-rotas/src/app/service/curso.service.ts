import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  getCursos() {
    return [
      { nome: 'Angular 2', id: 1 },
      { nome: 'Java', id: 2 },
    ];
  }

  getNome(params: any) {
    let cursos = this.getCursos();
    for (let index = 0; index < cursos.length; index++) {
      let curso = cursos[index];
      if (curso.id == params.id) {
        return curso;
      }
    }
    return null;
  }

  constructor() {}
}

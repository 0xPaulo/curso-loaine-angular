import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private alunos: any[] = [
    { id: 1, nome: 'aluno1', email: 'aluno1@email.com' },
    { id: 2, nome: 'aluno2', email: 'aluno2@email.com' },
    { id: 3, nome: 'aluno3', email: 'aluno3@email.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getInfo(id: any) {
    let alunos = this.getAlunos();
    for (let index = 0; index < alunos.length; index++) {
      const aluno = alunos[index];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
  constructor() {}
}

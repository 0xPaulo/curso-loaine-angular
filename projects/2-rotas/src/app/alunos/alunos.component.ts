import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../service/aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit, OnDestroy {
  alunos: any[] = [];

  constructor(private _alunoService: AlunoService) {}
  ngOnInit() {
    this.alunos = this._alunoService.getAlunos();
    console.log(this.alunos);
  }
  ngOnDestroy() {}
}

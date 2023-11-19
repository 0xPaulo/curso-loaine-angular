import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss'],
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {
  id: any;
  subscribe: Subscription = new Subscription();
  aluno: any;
  constructor(
    private _alunoService: AlunoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.subscribe = this._route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this._alunoService.getInfo(id);
    });
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  editarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}

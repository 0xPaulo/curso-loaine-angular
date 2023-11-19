import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunoService } from '../../service/aluno.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss'],
})
export class AlunosFormComponent implements OnInit, OnDestroy {
  aluno: any;
  subscriber: Subscription = new Subscription();

  constructor(
    private _route: ActivatedRoute,
    private _alunoService: AlunoService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.subscriber = this._route.params.subscribe((param: any) => {
      let id = param['id'];
      this.aluno = this._alunoService.getInfo(id);
      console.log(this.aluno);
    });
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}

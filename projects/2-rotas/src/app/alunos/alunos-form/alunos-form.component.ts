import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunoService } from '../../service/aluno.service';
import { IFormCanDeactivate } from '../../guards/iform.canDeactvate';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss'],
})
export class AlunosFormComponent
  implements OnInit, OnDestroy, IFormCanDeactivate
{
  aluno: any;
  subscriber: Subscription = new Subscription();
  private formMudou: boolean = false;

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

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que desaja sair dessa pagina?');
    }
    return true;
  }

  // isso é para tornar generico uma interface
  podeDesativar() {
    return this.podeMudarRota();
  }
}

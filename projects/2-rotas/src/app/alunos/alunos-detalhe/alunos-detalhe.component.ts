import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.scss'],
})
export class AlunosDetalheComponent implements OnInit {
  id: any;
  subscribe: Subscription = new Subscription();
  aluno!: Aluno;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    console.log('Init');

    this.aluno = this._route.snapshot.data['alunoRota'];
    // esse 'aluno' vem la da rota
  }

  editarAluno() {
    this._router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}

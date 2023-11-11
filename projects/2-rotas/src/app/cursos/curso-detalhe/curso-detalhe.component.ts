import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../../service/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(
    private _route: ActivatedRoute,
    private _cursoService: CursoService,
    private _router: Router
  ) {
    // this.id = _route.snapshot.params['id'];
    // console.log(this._route);
    // Pega so uma vez
  }
  ngOnInit() {
    this.inscricao = this._route.params.subscribe((params: any) => {
      this.id = params['id'];
      // id é passado pela rota
      // curso é passado pelo service
      this.curso = this._cursoService.getNome(params);
      console.log(params);
      if (this.curso == null) {
        this._router.navigate(['nao-encontrado']);
      }
      // console.log(nomeCurso);
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

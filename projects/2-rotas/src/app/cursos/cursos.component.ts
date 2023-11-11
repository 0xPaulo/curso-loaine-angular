import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any;
  pagina: any;
  inscricao: Subscription = new Subscription();

  constructor(
    private _cursoService: CursoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();
    this.inscricao = this._route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPag() {
    this._router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }
}

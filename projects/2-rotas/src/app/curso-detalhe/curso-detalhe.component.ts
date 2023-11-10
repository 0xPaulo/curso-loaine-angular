import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: string = '';
  inscricao: Subscription = new Subscription();

  constructor(private _route: ActivatedRoute) {
    // this.id = _route.snapshot.params['id'];
    // console.log(this._route);
    // Pega so uma vez
  }
  ngOnInit() {
    this.inscricao = this._route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
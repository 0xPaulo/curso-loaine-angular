import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent {
  id: string = '';

  constructor(private _route: ActivatedRoute) {
    this.id = _route.snapshot.params['id'];
    console.log(this._route);
  }
}

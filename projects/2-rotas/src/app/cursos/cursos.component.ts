import { Component, OnInit } from '@angular/core';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: any;

  constructor(private _cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this._cursoService.getCursos();
  }
}

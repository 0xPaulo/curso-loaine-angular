import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../service/servico/curso.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers: [CursoService],
})
export class CriarCursoComponent implements OnInit {
  cursosArray: string[] = [];

  constructor(private _service: CursoService) {}

  ngOnInit() {
    this.cursosArray = this._service.getCursos();
  }
  addCursoArray(curso: string) {
    this._service.addCurso(curso);
  }
}

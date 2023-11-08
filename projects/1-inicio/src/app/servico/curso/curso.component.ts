import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../service/servico/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
  providers: [CursoService],
})
export class CursoComponent implements OnInit {
  cursos: string[] = [];

  // cursoService: CursoService;
  constructor(private service: CursoService) {
    // injetando dentro de cursoSer o service
    // this.cursoService = this.service;
  }
  ngOnInit() {
    // assim nao precina nem declarar a variavel
    this.cursos = this.service.getCursos();

    // jeito 2
    CursoService.criouNovoCurso.subscribe((curso) => this.cursos.push(curso));
  }
}

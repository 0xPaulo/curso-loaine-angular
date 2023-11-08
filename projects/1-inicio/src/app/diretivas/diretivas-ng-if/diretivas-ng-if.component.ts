import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-if',
  templateUrl: './diretivas-ng-if.component.html',
  styleUrls: ['./diretivas-ng-if.component.scss'],
})
export class DiretivasNgIfComponent {
  cursos: string[] = ['Angular', 'Java'];
  mostrarCursos: boolean = false;
  onMostrarCurso() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}

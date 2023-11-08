import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../service/servico/curso.service';
// import { CursoService } from 'src/app/service/servico/curso.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss'],
})
export class ReceberCursoCriadoComponent implements OnInit {
  curso: string = '';
  constructor(private _service: CursoService) {}

  // Oq vir no subscribe do service vai entrar na variavel curso
  // e vai pro html ngIf{{curso}}
  ngOnInit() {
    this._service.emitirCursoCriado.subscribe(
      // jeito 1
      (cursoCriado) => (this.curso = cursoCriado)
    );
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CursoService } from 'src/app/service/servico/curso.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [CriarCursoComponent, ReceberCursoCriadoComponent],
  // providers: [CursoService],
  imports: [CommonModule],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}

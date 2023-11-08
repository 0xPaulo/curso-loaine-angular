import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { CursoComponent } from './curso/curso.component';
// import { CriarCursoComponent } from './criar-curso/criar-curso.component';
// import { CursoService } from '../service/servico/curso.service';
import { CursoModule } from './curso/curso.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [ServicoComponent],
  imports: [CommonModule, CursoModule, CriarCursoModule],
  exports: [ServicoComponent],
  // providers: [CursoService],
})
export class ServicoModule {}

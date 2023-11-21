import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursoService } from '../service/curso.service';
import { RouterModule } from '@angular/router';
import { CursoRoutingModule } from './curso-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [CommonModule, RouterModule, CursoRoutingModule, FormsModule],
  providers: [CursoService],
})
export class CursosModule {}

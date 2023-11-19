import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { RouterModule, Routes } from '@angular/router';
import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoService } from '../service/aluno.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [CommonModule, RouterModule, AlunosRoutingModule, FormsModule],
  providers: [AlunoService],
})
export class AlunosModule {}

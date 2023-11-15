import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [CommonModule, RouterModule],
})
export class AlunosModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AuthGuard } from '../guards/auth.guard';

// tudo que for hardcoded é avaliado primeiro alunos/novo
// e tudo depois do : é qualquer coisa
// logo o novo é qualquer coisa, tem que ficar em cima
const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunosFormComponent },
      { path: ':id', component: AlunosDetalheComponent },
      { path: ':id/editar', component: AlunosFormComponent },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}

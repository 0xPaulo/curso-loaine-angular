import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { AuthGuard } from '../guards/auth.guard';

const cursoRotas: Routes = [
  { path: '', component: CursosComponent, canActivate: [AuthGuard] },
  {
    path: 'nao-encontrado',
    component: CursoNaoEncontradoComponent,
    canActivate: [AuthGuard],
  },
  { path: ':id', component: CursoDetalheComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(cursoRotas)],
  exports: [RouterModule],
})
export class CursoRoutingModule {}

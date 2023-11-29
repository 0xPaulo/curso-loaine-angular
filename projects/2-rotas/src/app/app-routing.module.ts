import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RotasNaoEncontradaComponent } from './rotas-nao-encontrada/rotas-nao-encontrada.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'alunos',
    loadChildren: () =>
      import('projects/2-rotas/src/app/alunos/alunos.module').then(
        (m) => m.AlunosModule
      ),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('projects/2-rotas/src/app/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: RotasNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import 'materialize-css';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AlunosModule } from './alunos/alunos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CursoRoutingModule } from './cursos/curso-routing.module';
// import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    AppRoutingModule,
    // CursoRoutingModule,
    // AlunosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

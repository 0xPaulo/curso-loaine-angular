import 'materialize-css';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
import { CursoRoutingModule } from './cursos/curso-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, CursosModule, AppRoutingModule, CursoRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

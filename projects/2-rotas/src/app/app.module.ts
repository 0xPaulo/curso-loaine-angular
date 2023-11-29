import 'materialize-css';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './service/auth.service';
import { RotasNaoEncontradaComponent } from './rotas-nao-encontrada/rotas-nao-encontrada.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, RotasNaoEncontradaComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

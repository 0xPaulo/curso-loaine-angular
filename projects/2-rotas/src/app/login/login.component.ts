import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: Usuario = new Usuario();

  constructor(private _authService: AuthService) {}

  logarUsuario() {
    this._authService.verificarLoging(this.usuario);
  }
}

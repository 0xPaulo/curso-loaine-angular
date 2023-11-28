import { Router } from '@angular/router';
import { Usuario } from './../login/Usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioAutorizado: boolean = false;
  usuarioAutenticadoEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private _router: Router) {}

  verificarLoging(usuario: Usuario) {
    if (usuario.nome === '123' && usuario.senha === '123') {
      this.usuarioAutorizado = true;

      this.usuarioAutenticadoEmitter.emit(true);
      this._router.navigateByUrl('/');
    } else {
      this.usuarioAutenticadoEmitter.emit(false);
      this.usuarioAutorizado = false;
    }
  }

  usuarioEstaAuth() {
    if (this.usuarioAutorizado) {
      return true;
    }
    return false;
  }
}

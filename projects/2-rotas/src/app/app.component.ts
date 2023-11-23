import { Component, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '2-rotas';

  mostrarMenu: boolean = false;

  constructor(private serviceLogin: AuthService) {}
  ngOnInit() {
    this.serviceLogin.usuarioAutenticadoEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
}

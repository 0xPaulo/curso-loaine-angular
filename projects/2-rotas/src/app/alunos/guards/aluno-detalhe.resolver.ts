import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Aluno } from '../aluno';
import { Observable } from 'rxjs';
import { AlunoService } from '../../service/aluno.service';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunoService: AlunoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // aqui aparentemente ele tambem consegue acessar o id da rota
    let id = route.params['id'];
    console.log('Resolve');

    return this.alunoService.getInfo(id);
  }
}

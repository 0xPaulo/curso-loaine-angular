import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosDeactGuard implements CanDeactivate<AlunosFormComponent> {
  constructor() {}
  canDeactivate(
    component: AlunosFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('deactivated');

    return component.podeMudarRota();
  }
}

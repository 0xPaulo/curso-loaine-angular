import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './iform.canDeactvate';

@Injectable({
  providedIn: 'root',
})
export class AlunosDeactGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('deactivated');
    return component.podeDesativar();
  }
}

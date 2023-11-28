import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateChildFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlunosAuthGuard implements CanActivateChild {
  constructor() {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(childRoute);
    console.log(state);

    if (state.url.includes('editar')) {
      alert('USUARIO SEM ACESSO');
      return false;
    } else {
      return true;
    }
  }
}

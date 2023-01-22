import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServices } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  constructor(private route: Router, private authService: AuthServices) { }
  canLoad(route: Route, segments: UrlSegment[]):
    boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.authService.isLoggin$.subscribe((res) => {
      if (res) {
        return true
      } else {
        this.route.navigateByUrl('auth')
        return false
      }
    }
    )
    return false
  }
}

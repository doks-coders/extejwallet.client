import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  private jwtHelper = new JwtHelperService();

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.authService.authUser$.pipe(take(1)).subscribe({
      next: (authUserRequest) => {
        if (authUserRequest) {
          request = request.clone({
            setHeaders: { Authorization: `Bearer ${authUserRequest.token}` }
          })
        }
      }
    })

    return next.handle(request);
  }
}

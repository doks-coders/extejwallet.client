import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../_models/requests/register.request';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { LoginRequest } from '../_models/requests/login.request';
import { AuthUserResponse } from '../_models/response/auth-user.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  modeHandler = new BehaviorSubject<string | null>(null);
  $mode = this.modeHandler.asObservable();
  authUserObserver = new BehaviorSubject<AuthUserResponse | null>(null);
  authUser$ = this.authUserObserver.asObservable();

  constructor(private httpClient: HttpClient) {}

  setToken(authUserResponse: AuthUserResponse) {
    let stringVal = JSON.stringify(authUserResponse);
    localStorage.setItem("auth-user", stringVal);
    this.authUserObserver.next(authUserResponse);
  }
  removeToken() {
    localStorage.removeItem("auth-user");
    this.authUserObserver.next(null);
  }

  getUserId() {
    return this.httpClient.get<string>(this.baseUrl + "users/get-id")
  }

  registerUser(userDetails: RegisterRequest) {
    return this.httpClient.post<AuthUserResponse>(this.baseUrl + "auth/register", userDetails).pipe(map(val => {
      if (val) {
        this.setToken(val);
      }
      return val;
    }))
  }

  loginUser(userDetails: LoginRequest) {
    return this.httpClient.post<AuthUserResponse>(this.baseUrl + "auth/login", userDetails).pipe(map(val => {
      if (val) {
        this.setToken(val);
      }
      return val;
    }))
  }

  logOutUser() {
    this.removeToken();
  }
  intialiseToken() {
    let authUserObject = localStorage.getItem('auth-user')
    if (authUserObject) {
      let authUserResponse: AuthUserResponse = JSON.parse(authUserObject);
      this.authUserObserver.next(authUserResponse);
    }
  }
}

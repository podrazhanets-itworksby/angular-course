import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthResponseInterface } from 'src/app/auth/types/auth-response.interface';
import { LoginRequestInterface } from 'src/app/auth/types/login-request.interface';
import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(responce: AuthResponseInterface): CurrentUserInterface {
    return responce.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get(url).pipe(map(this.getUser));
  }
}

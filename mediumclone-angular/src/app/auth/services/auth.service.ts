import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((responce: AuthResponseInterface) => responce.user));
  }
}

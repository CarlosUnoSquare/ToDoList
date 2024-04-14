import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUserModel } from '../models/loginUser.model';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/API/APIResponse';
import { httpClientOptions } from './httpOptions';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = `${environment.baseAPIUrl}/login`;

  constructor(private http: HttpClient) {}

  loginUser(loginUser: LoginUserModel): Observable<APIResponse<string>> {
    return this.http.post<APIResponse<string>>(
      this.baseUrl,
      loginUser,
      httpClientOptions()
    );
  }

  isAuthenticated() {
    if (sessionStorage.getItem('token') === null) return false;
    else return true;
  }
}

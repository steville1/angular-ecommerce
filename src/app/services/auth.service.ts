import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/auth/signin';

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any> {
    return this.http.post(this.authUrl, user);
  }
}

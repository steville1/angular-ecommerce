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

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    // Example: Check if there is a token in local storage
    return !!localStorage.getItem('authToken');
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.removeUserDetails();
  }

  // Save user details (e.g. email) to localStorage
  saveUserDetails(email: string): void {
    localStorage.setItem('email', JSON.stringify(email));
  }

  // Retrieve user details from localStorage
  getUserDetails(): string | null {
    const email = localStorage.getItem('email');
    return email ? JSON.parse(email) : null;
  }

  // Remove user details from localStorage
  removeUserDetails(): void {
    localStorage.removeItem('userFullName');
  }
}

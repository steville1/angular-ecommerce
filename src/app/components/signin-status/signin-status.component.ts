import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin-status',
  templateUrl: './signin-status.component.html',
  styleUrls: ['./signin-status.component.css']
})
export class SigninStatusComponent {

  isAuthenticated: boolean = false;
  email: string = '';
  storage: Storage = sessionStorage;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthenticationStatus();
  }

  checkAuthenticationStatus() {
    this.isAuthenticated = !!this.authService.getToken();

    console.log("this.isAuthenticated", this.isAuthenticated)

    if (this.isAuthenticated) {
      this.getUserDetails();
    } else {
      this.email = '';
    }
  }

  getUserDetails() {
    // In a real application, you might fetch user details from an API or use a user profile stored in local/session storage.
    // For simplicity, assume the user’s full name is stored in session storage.
    const email = this.storage.getItem('email');
    this.email = email ? JSON.parse(email) : '';
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.email = '';
    this.storage.removeItem('email');
    // Redirect to the sign-in page or home page
    window.location.href = '/signin'; 
  }

}

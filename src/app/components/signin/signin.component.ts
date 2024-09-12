import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/common/signin';
import { AuthService } from 'src/app/services/auth.service';
import { TastefulTreasureValidators } from 'src/app/validators/tasteful-treasure-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  user!: User;
  loginForm: FormGroup | any;
  errorMessage: string | null = null; // To hold the error message

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      usernameOrEmail: new FormControl('', [Validators.required, Validators.minLength(2), TastefulTreasureValidators.notOnlyWhitespace]),
      password:  new FormControl('', [Validators.required, Validators.minLength(6), TastefulTreasureValidators.notOnlyWhitespace]),
    });
  }

  get usernameOrEmail() { return this.loginForm.get('usernameOrEmail'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    console.log("Handling the submit button");

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    }

    let user = new User();

    user.usernameOrEmail = this.loginForm.get('usernameOrEmail')?.value;
    user.password = this.loginForm.get('password')?.value;


    this.authService.signIn(user).subscribe(
      response => {
        console.log('Sign in successful', response);
         // Assuming the token is returned in the response
         const token = response.accessToken;
         if (token) {
          // this.authService.saveToken(token);
          // this.router.navigate(['/main']); // Redirect to the main page
            // navigate back to the products page
          this.router.navigateByUrl("/products");
         }
      },
      error => {
        // Handle error response
        this.errorMessage = 'Sign in failed. Please check your credentials and try again.';
      }
    );
  }
}

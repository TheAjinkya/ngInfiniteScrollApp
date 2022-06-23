import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  
  
  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit() {
    // init the react form object
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  // Initial implicite flow using OAuth2 protocol
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // Logout the current session
  logOut(): void {
    this.socialAuthService.signOut();
  }
}

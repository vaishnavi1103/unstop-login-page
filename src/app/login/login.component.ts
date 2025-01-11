import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: any;
  hide: boolean = false;
  isSubmit = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('emilys'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  /**
   * Method to login
   */
  login(): void {
    if (this.loginForm?.invalid) {
      this.isSubmit = true;
      return;
    }
    this.isSubmit = false;
    const userData = {username:this.loginForm?.value?.userName, password:this.loginForm?.value?.password};

    this.authService.loginRequest(userData).subscribe((res) => {
      this.authService.storeData(res?.refreshToken, res);
      this.router.navigate(['/home']);
    });
  }
}

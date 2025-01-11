import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AuthenticationService } from '../login/service/authentication.service';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-app-view',
  imports: [MatCardModule,TitleCasePipe],
  templateUrl: './app-view.component.html',
  styleUrl: './app-view.component.scss',
})
export class AppViewComponent implements OnInit {
  userData: any;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = this.authService.getLoggedinUserData();
  }

  /**
   * Method to logout
   */
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}

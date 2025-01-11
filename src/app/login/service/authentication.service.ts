import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Method to login user
   */
  loginRequest(userData: any): Observable<any> {
    return this.httpClient.post('https://dummyjson.com/auth/login', userData);
  }

  /*
   * Method to check user is logged in or not
   */
  isLoggedIn(): boolean {
    const token = this.getToken();

    if (token != null) {
      return true;
    } else {
      this.logoutUser();
      return false;
    }
  }

  /**
   * Method to store data
   */
  storeData(token: any, user: any): void {
    this.storeToken(token);
    this.storeLoggedinUserData(user);
  }

  /**
   * Method to store token
   */
  storeToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Method to logout user
   */
  logoutUser(): void {
    localStorage.clear();
  }

  /**
   * Method to store user data
   */
  public storeLoggedinUserData(user: any): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  /**
   * Method to get logged in user data
   */
  public getLoggedinUserData(): any {
    return JSON.parse(localStorage.getItem('userData') || '{}');
  }

  /**
   * Method to get token
   */
  public getToken(): any {
    return localStorage.getItem('token');
  }
}

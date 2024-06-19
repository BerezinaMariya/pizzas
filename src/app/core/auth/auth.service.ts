import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  private isLogged = false;

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  getToken() {
    return 'test';
  }

}

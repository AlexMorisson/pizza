import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AuthService {
  constructor() { }

  private isLogged = false;
  public idLogged$:Subject<boolean> = new Subject<boolean>();

  logIn() {
    this.isLogged = true;
    this.idLogged$.next(this.isLogged);
  }

  logOut() {
    this.isLogged = false;
    this.idLogged$.next(this.isLogged);
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  getToken() {
    return 'test';
  }
}

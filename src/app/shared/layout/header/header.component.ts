import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";
import {AuthGuard} from "../../../core/auth/auth.guard";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService, private authService: AuthService) { }

  loggedState: boolean = this.authService.isLoggedIn();

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn();
    this.loggedState = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logOut();
    this.loggedState = this.authService.isLoggedIn();
  }

}

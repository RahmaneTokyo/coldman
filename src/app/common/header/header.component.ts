import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoutConfirm: boolean;
  menu: boolean;

  constructor(private router: Router) {
    this.menu = false;
    this.logoutConfirm = false;
  }

  logout() {
    this.router.navigate(['/login']);
  }

  logoutConfirmation() {
    this.logoutConfirm = true;
    setTimeout(() => {
      this.logoutConfirm = false
    }, 3000);
  }
}

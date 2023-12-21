import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logged: boolean;
  show: boolean;

  constructor(private router: Router) {
    this.logged = false;
    this.show = false;
  }

  submit(login: NgForm) {
    this.logged = true;
    console.log(login.value)
    setTimeout(() => {
      this.logged = false;
      this.router.navigate(['/home']);
    }, 3000);
  }
}

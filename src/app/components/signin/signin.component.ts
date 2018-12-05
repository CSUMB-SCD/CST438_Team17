import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInService } from './signin.service';
import { SignIn } from './siginin';
import { ObservableLike } from 'rxjs';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent {

  user: SignIn = new SignIn;
  submitted = false;
  checkname: Object;

  constructor(private app: SignInService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.getUser(this.user.username).subscribe(data => this.checkname = data);
    console.log(this.checkname);
    if (this.app.getUser(this.user.username)) {
      this.submitted = true;
      // this.router.navigate(['../home']);
    } else {
      this.submitted = false;

      this.router.navigate(['../checkout']);
    }
    return false;
  }

}

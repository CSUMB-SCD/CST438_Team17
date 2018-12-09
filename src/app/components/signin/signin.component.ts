import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInService } from './signin.service';
import { SignIn } from './siginin';
import { ObservableLike } from 'rxjs';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  myUser: string;
  makeUser: SignIn;
  checkname: Object;
  message: String;
  errorMessage: string;

  constructor(private app: SignInService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.app.changeMessage('x');
    this.app.currentMessage.subscribe(message => this.message = message);
  }


  login() {
    this.app.getUser(this.myUser).subscribe(data => this.checkname = data);
     console.log(this.checkname);
     if (this.checkname[0] == null) {
      alert('Invalid Login!');
      // this.router.navigate(['../']);
     } else {
      this.app.changeMessage(this.myUser);
      this.app.makeUser(this.checkname[0].username, this.checkname[0].funds);
      this.makeUser = this.app.passUser();
      console.log(this.myUser);
      this.router.navigate(['../']);
    }
     return false;
  }

  setUp() {
    /*
    this.app.getUser(this.message).subscribe(data => this.checkname = data);
    console.log(this.checkname);
    */
    this.app.makeUser(this.checkname[0].username, this.checkname[0].funds);
    this.makeUser = this.app.passUser();
    console.log(this.myUser);
  }


}

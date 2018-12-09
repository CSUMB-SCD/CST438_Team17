import { SignInComponent } from './../signin/signin.component';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ObservableLike } from 'rxjs';
import { SignInService } from '../signin/signin.service';
import { SignIn } from '../signin/siginin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  user: SignIn;
  checkname: Object;
  message: string;

  constructor(private app: SignInService, private http: HttpClient, private router: Router) {
    this.checkname = [];
  }

  ngOnInit() {
    this.app.currentMessage.subscribe(message => this.message = message);
    this.user = this.app.passUser();
    /*
    if (this.message === 'x') {
      this.router.navigate(['../signin']);
    }
    */
  }

  newMessage() {
    this.app.changeMessage('Hello from Sibling');
  }

}

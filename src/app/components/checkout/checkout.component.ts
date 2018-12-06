import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SquadMember } from './../../models/squad-member';
import { Component, OnInit } from '@angular/core';
import { SquaddataService } from '../../services/squaddata.service';
import { SignInService } from '../signin/signin.service';
import { SignIn } from '../signin/siginin';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  tick$: {};
  ticket$:  SquadMember[];
  user: SignIn;
  checkname: Object;
  message: String;
  //
  // artist: string;
  // venue: string;
  // date: string;
  // quantity: number;
  // price: number;
  // description: string;
  // }];

  // confirmCheckout() {

  // }
  constructor(private squadService: SquaddataService, private app: SignInService,
    private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // this.show = [this.title, this.venue, this.date];
    // this.tickets = [this.quantity, this.price];
    // this.app.currentMessage.subscribe(message => this.message = message);
  if (this.message === 'x') {
      this.router.navigate(['../signin']);
    }
    this.app.getUser(this.message).subscribe(data => this.checkname = data);
    console.log(this.checkname);

    this.squadService.getMockData().subscribe(
      squadService => this.ticket$ = squadService);
  }

}

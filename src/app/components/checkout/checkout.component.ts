import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SquadMember } from './../../models/squad-member';
import { Component, OnInit } from '@angular/core';
import { SquaddataService } from '../../services/squaddata.service';
import { SignInService } from '../signin/signin.service';
import { SignIn } from '../signin/siginin';
import { Ticket } from './../../models/ticket';
import { TicketService } from './../../services/ticket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  ticket$:  Ticket[];
  user: SignIn;
  checkname: Object;
  message: String;
  total: number;
  amount: number[];

  constructor(private squadService: SquaddataService, private app: SignInService,
    private http: HttpClient, private router: Router, private ticketService: TicketService) {
      this.ticket$ = ticketService.getTickets();
      this.amount = ticketService.getCart();
      this.total = 0;
    }

  ngOnInit() {

    this.app.currentMessage.subscribe(message => this.message = message);
      if (this.message === 'x') {
        this.router.navigate(['../signin']);
      }
      this.user = this.app.passUser();
      for (let i = 0; i < this.ticket$.length; i++) {
        this.total += (this.ticket$[i].price * this.amount[i]);
      }
      console.log(this.total);

  }

  verifyPurchase() {
    if (this.app.takeMoney(this.total)) {
      if (this.ticketService.takeStock(this.amount)) {
        this.router.navigate(['/confirmation']);
      }
    }
    this.user = this.app.passUser();
    console.log(this.user);
  }

}

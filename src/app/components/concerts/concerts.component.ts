import { element } from 'protractor';
import { Ticket } from './../../models/ticket';
import { TicketService } from './../../services/ticket.service';
import { HttpClient } from '@angular/common/http';
import { SquadMember } from './../../models/squad-member';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { SignInComponent } from './../signin/signin.component';
import { ObservableLike } from 'rxjs';
import { SignInService } from '../signin/signin.service';
import { SignIn } from '../signin/siginin';
import { SquaddataService } from '../../services/squaddata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})


export class ConcertsComponent implements OnInit {
  public data: any = [];
  user: SignIn;
  checkname: Object;
  message: String;
  ticket$: Ticket[];
  cart$: TicketService[];
  amount: number;
  options: any = [[]];
  // constructor(private squadService: SquaddataService, private ticketService: TicketService) { }
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private app: SignInService, private http: HttpClient, private router: Router,
  private squadService: SquaddataService, private ticketService: TicketService) { }

  ngOnInit() {
    // this.getTickets();
    this.squadService.getMockData().subscribe(
      squadService => this.ticket$ = squadService
    );
    /*
    for (let i = 0; i < this.ticket$.length; i++) {
      this.ticket$[i].inCart = 0;
    }
    */
    this.app.currentMessage.subscribe(message => this.message = message);
    if (this.message === 'x') {
      this.router.navigate(['../signin']);
    }
    this.user = this.app.passUser();
  }

  public createRange(num: number) {
    this.options = [];
    for (let i = 1; i <= num; i++) {
      this.options.push(i);
    }
    return this.options;
  }




  public addCart(product: Ticket, amount: number) {
    this.ticketService.addTicket(product, amount);
  }

  public addTicket(product: Ticket) {
    this.ticketService.oneTicket(product);
  }

}

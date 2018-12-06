import { element } from 'protractor';
import { Ticket } from './../../models/ticket';
import { TicketService } from './../../services/ticket.service';
import { SquadMember } from './../../models/squad-member';
import { Component, OnInit, Inject } from '@angular/core';
import { SquaddataService } from 'src/app/services/squaddata.service';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})


export class ConcertsComponent implements OnInit {
  ticket$: SquadMember[];
  cart$: TicketService[];
  constructor(private squadService: SquaddataService, private ticketService: TicketService) { }

  ngOnInit() {
    // this.getTickets();
    this.squadService.getMockData().subscribe(
      squadService => this.ticket$ = squadService
    );
  }

  public addCart(product: Ticket) {
    this.ticketService.addTicket(product);
  }

}

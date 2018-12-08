import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from './../../models/ticket';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cart$: Ticket[];

  constructor(private ticketService: TicketService) {
    this.cart$ = ticketService.getTickets();
  }

  ngOnInit() {
  }

}

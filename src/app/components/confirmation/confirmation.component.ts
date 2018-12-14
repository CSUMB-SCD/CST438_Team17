import { SquaddataService } from './../../services/squaddata.service';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from './../../models/ticket';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  cart: Ticket[];

  constructor(private ticketService: TicketService, private squadService: SquaddataService) {
    this.cart = ticketService.getTickets();
  }

  ngOnInit() {
  }

  resetCart() {
    this.ticketService.resetTickets();
  }

  updateCart() {
    for (const tick of this.cart) {
      this.updateDatabase(tick);
    }
    this.resetCart();
  }

  updateDatabase(ticket: Ticket) {
    this.squadService.setData(ticket);
  }

}

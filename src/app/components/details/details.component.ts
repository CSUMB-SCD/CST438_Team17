import { Ticket } from './../../models/ticket';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  ourTicket: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ourTicket = this.ticketService.getMyTicket();
  }


  public addCart(product: Ticket) {
    this.ticketService.addTicket(product);
  }


}

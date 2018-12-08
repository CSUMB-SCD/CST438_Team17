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
  amount: number;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ourTicket = this.ticketService.getMyTicket();
  }


  public addCart(product: Ticket, amount: number) {
    this.ticketService.addTicket(product, amount);
  }


}

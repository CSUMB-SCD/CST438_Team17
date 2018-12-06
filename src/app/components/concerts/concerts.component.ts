import { TicketService } from './../../services/ticket.service';
import { Ticket } from './../../models/ticket';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})
export class ConcertsComponent implements OnInit {

  tickets: Observable<Ticket[]>;

  constructor(private ticketservice: TicketService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tickets = this.ticketservice.getTicketsList();
  }

}

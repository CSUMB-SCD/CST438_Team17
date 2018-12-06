import { Ticket } from './../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnInit} from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: string[] = [];
  constructor() {
    this.tickets.push('Eminem', 'Green Day', 'Dillon Francis', 'Twenty One Pilots', 'The Strokes', 'Boy Pablo', 'Kendrick Lamar', 'Drake');
   }

   getTickets(): String[] {
    return this.tickets;
  }
  // TO-DO attach heroku link to ticketssvc here
  // private baseURL = 'herokuapp.com/whatever';
  // private baseURL = 'https://team17-ticketservice.herokuapp.com/ConcertTickets';
  // allTickets: Ticket[];
  // constructor(private http: HttpClient) { }

  // getTicketsList(): Observable<any> {
  //   return this.http.get<Array<Ticket>>(`${this.baseURL}`);
  // }
}

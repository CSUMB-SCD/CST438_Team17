import { Ticket } from './../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets[:string];

  private tickets: string["Eminem" ,"Tom"];

  // TO-DO attach heroku link to ticketssvc here
  // private baseURL = 'herokuapp.com/whatever';
  private baseURL = 'https://team17-ticketservice.herokuapp.com/ConcertTickets';
  // allTickets: Ticket[];
 
  constructor(private http: HttpClient) { }

  getTicketsList(): Observable<any> {
    return this.http.get<Array<Ticket>>(`${this.baseURL}`);
  }
}

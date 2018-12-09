import { Ticket } from './../models/ticket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OnInit} from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[];
  private myTicket: Ticket;
  amount: number [];
  constructor() {
    this.tickets = [];
    this.amount = [];
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  addTicket(newTick: Ticket, amount: number) {
    if (this.tickets.includes(newTick)) {
    //  this.tickets[this.index].inCart = this.tickets[this.index].inCart + amount;
    } else {
    //  newTick.inCart += amount;
      this.tickets.push(newTick);
    }
  }

  // TODO::DETIALS
  oneTicket(newTick: Ticket) {
    this.myTicket = newTick;
  }

  getMyTicket(): Ticket {
    return this.myTicket;
  }

  public pushCart(amount: number) {
    this.amount.push(amount);
  }

  public getCart(): number[] {
    return this.amount;
  }

  takeStock(amount: number[]): boolean {
    for (let i = 0; i < amount.length; i++) {
      if (amount[i] > this.tickets[i].stock) {
        return false;
      }
    }

    for (let j = 0; j < amount.length; j++) {
      this.tickets[j].stock -= amount[j];
    }

    return true;
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

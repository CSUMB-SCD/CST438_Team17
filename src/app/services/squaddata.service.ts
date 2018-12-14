import { Ticket } from './../models/ticket';
import { SquadMember } from '../models/squad-member';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SquaddataService {
  URL: string;
  ticketBase: Ticket[];
  checkBase: Object;
  private cartSource = new BehaviorSubject('x');
  currentMessage = this.cartSource.asObservable();

  constructor(protected httpClient: HttpClient) {
    console.log('squad is working');
    this.URL = '';
    this.ticketBase = [];
    this.checkBase = [];
  }
  getSquad() {
    return this.httpClient.get<Array<SquadMember>>(
      'https://api.myjson.com/bins/14g5si');
  }
  getMockData()  {
    return this.httpClient.get<Array<Ticket>>(
      '../assets/dbMock.json');
  }
  getData()  {
    return this.httpClient.get<Array<Ticket>>(
      'https://team17-ticketservice.herokuapp.com/ConcertTickets');
  }
  setData(ticket: Ticket) {
    return this.httpClient.put<Array<Ticket>>(
      'https://team17-checkoutsvc.herokuapp.com/ConcertTickets/' + ticket.id, ticket);
  }
}

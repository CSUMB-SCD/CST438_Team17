import { TicketService } from './../../services/ticket.service';
import { Ticket } from './../../models/ticket';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})


export class ConcertsComponent implements OnInit {
  public data: any = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    // this.getTickets();
  }
  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
   }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key] = this.storage.get(key);
    console.log(this.data);
    }

  // reloadData() {
  //   this.tickets = this.ticketservice.getTicketsList();
  // }

  // getTickets(): void {
  //   this.ticketservice.getTicketsList().subscribe(
  //    ticketservice => this.tickets$ = ticketservice
  //   );
  // }

}

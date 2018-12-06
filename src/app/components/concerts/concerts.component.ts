import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketService } from './../../services/ticket.service';
import { Ticket } from './../../models/ticket';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { SignInComponent } from './../signin/signin.component';
import { ObservableLike } from 'rxjs';
import { SignInService } from '../signin/signin.service';
import { SignIn } from '../signin/siginin';
import { SquaddataService } from '../../services/squaddata.service';
import { SquadMember } from './../../models/squad-member';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})


export class ConcertsComponent implements OnInit {
  public data: any = [];
  user: SignIn;
  checkname: Object;
  message: String;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
  private app: SignInService, private http: HttpClient, private router: Router,
  private squadService: SquaddataService) { }

  ngOnInit() {
  this.app.currentMessage.subscribe(message => this.message = message);
  if (this.message === 'x') {
      this.router.navigate(['../signin']);
    }
    this.app.getUser(this.message).subscribe(data => this.checkname = data);
    console.log(this.checkname);
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

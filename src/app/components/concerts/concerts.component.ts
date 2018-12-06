import { SquadMember } from './../../models/squad-member';
import { Component, OnInit, Inject } from '@angular/core';
import { SquaddataService } from 'src/app/services/squaddata.service';
// import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.scss']
})


export class ConcertsComponent implements OnInit {
  ticket$: SquadMember[];
  constructor(private squadService: SquaddataService) { }

  ngOnInit() {
  this.app.currentMessage.subscribe(message => this.message = message);
  if (this.message === 'x') {
      this.router.navigate(['../signin']);
    }
    this.app.getUser(this.message).subscribe(data => this.checkname = data);
    console.log(this.checkname);
    // this.getTickets();
    this.squadService.getMockData().subscribe(
      squadService => this.ticket$ = squadService
    );
  }



}

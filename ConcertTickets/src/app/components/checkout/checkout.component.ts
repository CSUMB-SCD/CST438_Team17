import { Component, OnInit } from '@angular/core';
import { SquaddataService } from '../../services/squaddata.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  title: string;
venue: string;
date: string;
ticketCount: number;
price: number;

show: string[];
tickets: number[];

confirmCheckout() {

}
  constructor(private squadService: SquaddataService) {}

  ngOnInit() {
    this.title = 'Eminem';
    this.venue = 'Civic Center';
    this.date = '12/1/18 10pm';
    this.ticketCount = 1;
    this.price = this.ticketCount * 50;

    this.show = [this.title, this.venue, this.date];
    this.tickets = [this.ticketCount, this.price];


  }

}

import { Component, OnInit } from '@angular/core';
import { SquaddataService } from '../../services/squaddata.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  tick$:{};
  ticket$: {
  artist: string;
  venue: string;
  date: string;
  quantity: number;
  price: number;
  };

  // confirmCheckout() {

  // }
  constructor(private squadService: SquaddataService) {}

  ngOnInit() {
    // this.show = [this.title, this.venue, this.date];
    // this.tickets = [this.quantity, this.price];

    // this.squadService.getSquad().subscribe(
    //   squadService => this.tick$ = squadService
    // );
  }

}

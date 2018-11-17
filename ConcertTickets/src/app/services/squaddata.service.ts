import { SquadMember } from '../models/squad-member';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SquaddataService {
  URL: string;

  constructor(protected httpClient: HttpClient) {
    console.log('squad is working');
    this.URL = '';
  }
  getSquad() {
    return this.httpClient.get<Array<SquadMember>>(this.URL);
  }
}

import { SquadMember } from '../models/squad-member';
import { Userbase } from '../models/user-base';
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
    return this.httpClient.get<Array<SquadMember>>(
      'https://api.myjson.com/bins/14g5si');
  }
  getUsers() {
    return this.httpClient.get<Array<Userbase>>(
      'https://api.myjson.com/bins/6wu7m');
  }
}

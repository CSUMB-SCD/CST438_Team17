import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from './siginin';
import { BehaviorSubject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private baseUrl = 'https://team17userdb.herokuapp.com/';
  private user = new SignIn;
  private messageSource = new BehaviorSubject('x');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    this.user.username = '';
    this.user.funds = 0;
  }

  getUser(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}signin/${username}`);
  }

  makeUser(username: string, funds: number) {
    this.user.username = username;
    this.user.funds = funds;
  }

  passUser(): SignIn {
    return this.user;
  }

  takeMoney(total: number): boolean {
    console.log(total);
    if (this.user.funds < total) {
      alert('Insufficent funds! Get back to work shorty');
      return false;
    } else {
      this.user.funds -= total;
      console.log(this.user.funds);
      return true;
    }
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

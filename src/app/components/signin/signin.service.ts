import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from './siginin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private baseUrl = 'https://team17userdb.herokuapp.com';
  user: SignIn;
  private messageSource = new BehaviorSubject('x');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getUser(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}signin/${username}`);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}

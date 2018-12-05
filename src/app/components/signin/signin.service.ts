import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from './siginin';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getUser(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}signin/${username}`);
  }
}

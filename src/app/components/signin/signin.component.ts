import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SquaddataService } from '../../services/squaddata.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  credentials = {username: '', password: ''};
  user = {};

  constructor(private squadService: SquaddataService, private router: Router) {
  }

  login() {
      this.squadService.getUsers().subscribe(
        squadService => this.user = squadService
      );
  }

}

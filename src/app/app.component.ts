import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // logout() {
    //   this.http.post('logout', {}).finally(() => {
    //       this.app.authenticated = false;
    //       this.router.navigateByUrl('/signin');
    //   }).subscribe();
    // }


}

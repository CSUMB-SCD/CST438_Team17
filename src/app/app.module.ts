import { SquaddataService } from './services/squaddata.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpRequest, HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './app.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { DetailsComponent } from './components/details/details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConcertsComponent,
    SigninComponent,
    CheckoutComponent,
    DetailsComponent,
    ThankyouComponent,
    ConfirmationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }, SquaddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

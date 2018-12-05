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
import { SignInService } from './components/signin/signin.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/signin/signin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { DetailsComponent } from './components/details/details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from 'selenium-webdriver/http';
import { SignIn } from './components/signin/siginin';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConcertsComponent,
    SignInComponent,
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
  providers: [AppService, SignInService, SquaddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

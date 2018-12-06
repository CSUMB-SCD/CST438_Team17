import { SquaddataService } from './services/squaddata.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpRequest, HttpInterceptor, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';



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
import {MatCardModule} from '@angular/material/card';
// import { HttpClient } from 'selenium-webdriver/http';
import { SignInService } from './components/signin/signin.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'confirmation', component: ConfirmationComponent }
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
    MatCardModule,
    StorageServiceModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [SignInService, SquaddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

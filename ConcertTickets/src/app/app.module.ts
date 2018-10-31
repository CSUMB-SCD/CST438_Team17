import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConcertsComponent } from './components/concerts/concerts.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { DetailsComponent } from './components/details/details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SigninComponent }
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
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

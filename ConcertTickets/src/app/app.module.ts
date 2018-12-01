import { SquaddataService } from './services/squaddata.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
  providers: [SquaddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

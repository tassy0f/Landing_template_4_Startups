import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { PriceCartComponent } from './components/price-cart/price-cart.component';
import { GsSendPlanComponent } from './components/gs-send-plan/gs-send-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    PriceCartComponent,
    GsSendPlanComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

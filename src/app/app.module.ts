import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { GetStartedComponent } from './components/get-started/get-started.component';


@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent
  ],
  imports: [
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './assets/libraries/material/material.module';
// import { CustomDirectiveDirective } from './app/customers/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainQuoteComponent } from './main-quote/main-quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatedifferencePipe } from './datedifference.pipe';
import { DateDifferencePipe } from './date-difference.pipe';
import { DatediffererncePipe } from './DateDifference/datedifferernce.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainQuoteComponent,
    AddQuoteComponent,
    QuoteDetailsComponent,
    DatedifferencePipe,
    DateDifferencePipe,
    DatediffererncePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

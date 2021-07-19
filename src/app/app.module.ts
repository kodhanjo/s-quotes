import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesMainComponent } from './quotes-main/quotes-main.component';
import { DateDifferencePipe } from './PipeDifference/date-difference.pipe';
import { HighlighterDirective } from './Highlighter/highlighter.directive';
@NgModule({
  declarations: [
    AppComponent,
    QuotesAddComponent,
    QuotesDetailsComponent,
    QuotesMainComponent,
    DateDifferencePipe,
    HighlighterDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

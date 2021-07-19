import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesAddComponent } from './quotes-add/quotes-add.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesMainComponent } from './quotes-main/quotes-main.component';
import { DateDifferencePipe } from './PipeDifference/date-difference.pipe';
import { HighlighterDirective } from './Highlighter/highlighter.directive';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    QuotesMainComponent,
    QuotesDetailsComponent,
    QuotesAddComponent,
    DateDifferencePipe,
    HighlighterDirective,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

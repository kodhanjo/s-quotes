import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { MainQuoteComponent } from './main-quote/main-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

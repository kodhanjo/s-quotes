import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Boilerplate/Quote'
import * as moment from 'moment';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  constructor() { }
  @Output() emitQuote = new EventEmitter();
  quote: string;
  username: string;
  author: string;
  newQuote: any;

  submitQuote(): void {
    this.newQuote = new Quotes(
      this.username,
      this.quote,
      this.author,
      moment()
    );
    this.quote = '';
    this.author = '';
    this.username = '';
    this.emitQuote.emit(this.newQuote);
  }


  ngOnInit(): void {
  }

}

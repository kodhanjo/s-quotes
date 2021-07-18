import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Boilerplate/Quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  constructor() { }
  @Input() quote: Quotes;
  ngOnInit(): void {
  }

}

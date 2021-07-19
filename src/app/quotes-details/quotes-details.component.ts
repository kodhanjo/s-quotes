import { Component, OnInit } from '@angular/core';
import { Quotes } from '../Boilerplates/Quote'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  constructor() { }
  @Input() quote: Quotes;
  ngOnInit(): void {
  }

}

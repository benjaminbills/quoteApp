import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-footer',
  templateUrl: './quote-footer.component.html',
  styleUrls: ['./quote-footer.component.css'],
})
export class QuoteFooterComponent implements OnInit {
  @Input() quote!: Quote;
  constructor() {}

  ngOnInit(): void {}
}

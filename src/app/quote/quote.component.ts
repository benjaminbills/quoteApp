import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import {
  faThumbsDown,
  faThumbsUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  quotes: Quote[] = [
    new Quote(
      1,
      'Rick Falkvinge',
      'Bitcoin will do to banks what email did to the postal industry',
      'Benjamin Obafemi',
      new Date(2019, 3, 14)
    ),
    new Quote(
      2,
      'Adam Draper',
      'Bitcoin is here to stay. There would be a hacker uproar to anyone who attempted to take credit for the patent of cryptocurrency. And I wouldn’t want to be on the receiving end of hacker fury.',
      'Floyd Mayweather',
      new Date(2020, 3, 14)
    ),
    new Quote(
      3,
      'Elon Musk',
      'Self-driving cars are the natural extension of active safety and obviously something we should do.',
      'John Doe',
      new Date(2020, 3, 14)
    ),
  ];
  upVote(index: number) {
    this.quotes[index].upVotes += 1;
  }
  downVote(index: number) {
    this.quotes[index].downVotes += 1;
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }
  checkHighestUpvote(): Quote[] {
    return this.quotes.sort((a: Quote, b: Quote) => b.upVotes - a.upVotes);
  }
  setHighest() {
    let highQuote = { ...this.checkHighestUpvote() };
    return highQuote[1];
  }
  deleteQuote(index: number) {
    this.quotes.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}

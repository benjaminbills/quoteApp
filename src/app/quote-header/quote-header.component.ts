import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faThumbsDown,
  faThumbsUp,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.css'],
})
export class QuoteHeaderComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  @Input() quote!: Quote;
  @Output() quoteDelete = new EventEmitter<boolean>();
  @Output() quoteUpvote = new EventEmitter<boolean>();
  @Output() quoteDownvote = new EventEmitter<boolean>();

  upvoteQuote(quoteUpvote: boolean) {
    this.quoteUpvote.emit(quoteUpvote);
  }
  downvoteQuote(quoteDownvote: boolean) {
    this.quoteDownvote.emit(quoteDownvote);
  }
  deleteQuote(toDelete: boolean) {
    this.quoteDelete.emit(toDelete);
  }
  constructor() {}

  ngOnInit(): void {}
}

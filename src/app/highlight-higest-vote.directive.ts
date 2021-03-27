import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightHigestVote]',
})
export class HighlightHigestVoteDirective {
  constructor(elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'Lightgreen';
  }
}

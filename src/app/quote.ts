export class Quote {
  upVotes: number;
  downVotes: number;

  constructor(public id: number, public author: string, public quote: string) {
    this.upVotes = 0;
    this.downVotes = 0;
  }
}

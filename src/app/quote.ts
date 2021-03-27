export class Quote {
  upVotes: number;
  downVotes: number;

  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public submittedBy: string,
    public createdDate: Date
  ) {
    this.upVotes = 0;
    this.downVotes = 0;
  }
}

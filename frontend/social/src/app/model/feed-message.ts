export class FeedMessage {
    user: string;
    nickName: string;
    content: string;

  constructor(
    user: string,
    nickName: string,
    content: string
  ) {
    this.user = user;
    this.nickName = nickName;
    this.content = content;
  }

}

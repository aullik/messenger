export class FeedMessage {
  user: string;
  nickName: string;
  content: string;
  timeStamp: string;

  constructor(
    user: string,
    nickName: string,
    content: string,
    timeStamp: string
  ) {
    this.user = user;
    this.nickName = nickName;
    this.content = content;
    this.timeStamp = timeStamp;
  }

}



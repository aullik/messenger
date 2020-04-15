export class FeedMessage {
  id: string;
  user: string;
  nickName: string;
  content: string;
  timeStamp: string;
  answerOfId?: string;
  constructor(
    id: string,
    user: string,
    nickName: string,
    content: string,
    timeStamp: string,
    answerOfId: string = null,
  ) {
    this.id = id;
    this.user = user;
    this.nickName = nickName;
    this.content = content;
    this.timeStamp = timeStamp;
    this.answerOfId = answerOfId;
  }
}

export class DbMessage {
  id: string;
  user: string;
  content: string;
  timeStamp: string;
  answerOfId?: string;
  constructor(
    id: string,
    user: string,
    content: string,
    timeStamp: string,
    answerOfId: string = null,
  ) {
    this.id = id;
    this.user = user;
    this.content = content;
    this.timeStamp = timeStamp;
    this.answerOfId = answerOfId;
  }

}



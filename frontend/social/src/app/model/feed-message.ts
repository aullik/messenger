import { MessageMedia } from './media';

export class FeedMessage {
  id: string;
  user: string;
  nickname: string;
  content: string;
  media?: MessageMedia[];
  timeStamp: string;
  answerOfId?: string;
  constructor(
    id: string,
    user: string,
    nickname: string,
    content: string,
    media: MessageMedia[],
    timeStamp: string,
    answerOfId: string = null,
  ) {
    this.id = id;
    this.user = user;
    this.nickname = nickname;
    this.content = content;
    this.media = media;
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



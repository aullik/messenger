import { User } from './../model/user';
import { DatabaseService } from './database.service';
import { Injectable } from '@angular/core';
import { FeedMessage, DbMessage } from '../model/feed-message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private users: User[] = new Array();

  messages: FeedMessage[] = new Array();

  constructor(private httpClient: HttpClient, private db: DatabaseService) {
    this.db.getAllUser()
    .then((u) => this.users.push(...u));
    this.db.getFeed()
    .then((f) => this.messages.push(...f));
  }

  public setNewMessage(newMessage: FeedMessage): boolean {
    this.messages = [newMessage].concat(this.messages);
    return true;
  }

  public getUser(): User {
    return this.users[0];
  }

  public getUserByName(nickname: string): User {
    return this.users.filter(u => u.nickname === nickname)[0]
  }

  public getAllUser():User[] {
    return this.users;
  }

  // startmessage : fist message to count. If null, start at latest
  // offset : number of messages, begin at startmessage
  public getFeed(startmessage: FeedMessage = null, offset: number = 50): FeedMessage[] {
    return this.messages;
  }

  // needed for backend transfer
  public convertImage(rawImage: string): Blob {
    const base64Image = rawImage.replace(/data:image\/jpeg;base64,/g, '');
    const plainString = window.atob(base64Image);
    const arrayBuffer = new ArrayBuffer(plainString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let n = 0; n < plainString.length; n++) {
      int8Array[n] = plainString.charCodeAt(n);
    }
    return new Blob([int8Array], { type: 'image/jpeg'});
  }
}

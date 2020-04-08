import { Component, OnInit } from '@angular/core';
import {FeedMessage} from 'src/app/model/feed-message';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  messages: FeedMessage[] = [
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
      { user: "theGuy0001", nickName: 'Guy', content: 'First Message!!!!, yay', timeStamp : new Date().toTimeString()},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

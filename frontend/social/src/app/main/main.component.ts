import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
import {FeedMessage} from 'src/app/model/feed-message';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  groupSelected = false;
  settingsSelected = false;
  chatSelected = false;

  messageFeed: FeedMessage[] = [];

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
      this.db.connect();
  }

  onClick(i: number) {
    // close all except the feed
    if (i === 0) {
      this.settingsSelected = false;
      this.groupSelected = false;
      this.chatSelected = false;
      this.db.getFeed()
        .then(
          (v) => {
            this.messageFeed = v;
            console.log(JSON.stringify(v)) }
        );
    }
    if (i === 1) { this.chatSelected = !this.chatSelected; }
    if (i === 2) { this.groupSelected = !this.groupSelected; }
    if (i === 3) { this.settingsSelected = !this.settingsSelected; }
  }

}

import { FeedComponent } from './feed/feed.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedMessage } from 'src/app/model/feed-message';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild(FeedComponent) private feedView: FeedComponent;

  number= 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number) {
    i == 0 ? this.feedView.refresh() : null;
    this.number = i;
  }

}

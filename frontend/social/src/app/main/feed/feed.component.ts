import { VIRTUAL_SCROLL_STRATEGY, FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { BackendService } from './../../service/backend.service';
import { Component, OnInit, Input, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import {FeedMessage} from 'src/app/model/feed-message';
import { Observable, Subscription, BehaviorSubject, observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';

export class MyDataSource extends DataSource<FeedMessage | undefined> {
  private _cachedData = this.backend.messages;
  private _length = 50;
  private _dataStream = new BehaviorSubject<(FeedMessage| undefined)[]>(this._cachedData);
  private obs = new Observable<FeedMessage[]>(observer => {
    setInterval(() => {
      const currFeed = this.backend.getFeed();
      if (this._cachedData.length !== currFeed.length) {
        this._cachedData = currFeed.slice(0,this._length)
      observer.next(currFeed)
    }
    }, 3000)
  });
  private _subscription = new Subscription();

  constructor(private backend: BackendService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<(FeedMessage | undefined)[]> {
    this._subscription.add(
    this.obs.subscribe(next => this._dataStream.next(next))
    );
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }
}


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit, AfterViewInit {

  messages = new MyDataSource(this.backend);

  constructor(private backend: BackendService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() { 
  }

  // parent call
  refresh() {

  }


}

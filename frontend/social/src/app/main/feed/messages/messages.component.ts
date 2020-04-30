import { BackendService } from './../../../service/backend.service';
import { User } from './../../../model/user';
import { Component, OnInit, Input } from '@angular/core';
import { FeedMessage } from 'src/app/model/feed-message';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input()
  content: FeedMessage;

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer,
      private backend: BackendService
    ){  }

  ngOnInit(): void {
  }

  getPic(name: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(this.backend.getUserByName(name).icon);
  }

  getMedia(path: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(path);
  }

}

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
  content: FeedMessage = null;

  name: string =  "Icons-mini-icon_user_(v).svg";

  get absUrl() {
    return "src/assets/" + this.name;
  }

  constructor(
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer
    ){
      this.matIconRegistry.addSvgIcon(
            "user-icon",
            this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icon.svg")
          );
    }

  ngOnInit(): void {
  }

}

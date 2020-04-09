import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../service/database.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  groupSelected = false;
  settingsSelected = false;
  chatSelected = false;

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
    }
    if (i === 1) { this.chatSelected = !this.chatSelected; }
    if (i === 2) { this.groupSelected = !this.groupSelected; }
    if (i === 3) { this.settingsSelected = !this.settingsSelected; }
    this.db.test();
  }

}

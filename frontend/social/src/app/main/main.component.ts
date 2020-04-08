import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  groupSelected = false;
  settingsSelected = false;
  chatSelected = false;

  constructor() { }

  ngOnInit(): void {
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
  }

}

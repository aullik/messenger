import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() navClick = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleHome() {
    this.navClick.emit(0);
  }
  toggleChat() {
    this.navClick.emit(1);
  }
  toggleGroup() {
    this.navClick.emit(2);
  }
  toggleSettings() {
    this.navClick.emit(3);
  }

}

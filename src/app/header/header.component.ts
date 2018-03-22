import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tabEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  selectTab(tab: string) {
    this.tabEmitter.emit(tab);
  }
}

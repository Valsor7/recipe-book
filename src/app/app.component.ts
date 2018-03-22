import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab = 'recipe';
  onTabSelected(selectedTab: string) {
    this.tab = selectedTab;
  }
}

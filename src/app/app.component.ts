import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  navPage = '';

  constructor() {}

  onNavSelectionReceived(navItem: string) {
    // console.log(navItem);
    this.navPage = navItem;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSideNav: boolean;

  closeSideNav() {
    this.showSideNav = false;
  }

  openSideNav() {
    this.showSideNav = true;
  }
}

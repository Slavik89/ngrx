import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

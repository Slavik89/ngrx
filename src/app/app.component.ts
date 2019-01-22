import {ChangeDetectionStrategy, Component} from '@angular/core';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as rootReducer from './store/reducers';
import * as sidenavActions from './store/actions/sidenavActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<rootReducer.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(rootReducer.getShowSidenav);
  }

  onCloseSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new sidenavActions.CloseSidenav());
  }

  onOpenSidenav() {
    this.store.dispatch(new sidenavActions.OpenSidenav());
  }
}

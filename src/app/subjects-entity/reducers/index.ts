import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

//import * as fromSidenav from './sidenavReducer';
import * as fromSubject from './subject.reducer';

export interface State {
  //sidenav: fromSidenav.State;
  subjects: fromSubject.State;
}

const reducers = {
  //sidenav: fromSidenav.reducer,
  subjects: fromSubject.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * 
 *
 * ```ts
 * class MyComponent {
 * 	constructor(state$: Observable<State>) {
 * 	  this.booksState$ = state$.select(getStudentState);
 * 	}
 * }
 * ```
 */

export const getSubjectState = (state: State) => state.subjects;
export const getSubjectEntities = createSelector(getSubjectState, fromSubject.getEntities);
/* export const getStudentLoaded = createSelector(getStudentState, fromSubject.getLoaded);
export const getStudentLoading = createSelector(getStudentState, fromSubject.getLoading); */


/* export const getSubjectsPageState = (state: State) => state.sidenav;
export const getShowSidenav = createSelector(getSidenavState, fromSidenav.getShowSidenav); */

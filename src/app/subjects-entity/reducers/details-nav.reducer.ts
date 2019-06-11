import * as navDetails from '../actions/detail-page.actions';

export interface State {
  showNavDetails: boolean;
}

const initialState: State = {
  showNavDetails: false,
};

export function navReducer(state = initialState, action: navDetails.Actions): State {
  switch (action.type) {
    case navDetails.OPEN_DETAILS:
      return {
        showNavDetails: true
      };

    case navDetails.CLOSE_DETAILS:
      return {
        showNavDetails: false
      };

    default:
      return state;
  }
}

//export const getShowSidenav = (state: State) => state.showNavDetails;

/* import { createReducer, on } from '@ngrx/store';
import { openDetails, closeDetails } from '../actions/detail-page.actions';

export const initialState = 'closed';

export const navReducer = createReducer(initialState,
  on(openDetails, state => 'open'),
  on(closeDetails, state => 'closed')  
); */
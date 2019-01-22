import * as sidenav from '../actions/sidenavActions';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: sidenav.Actions): State {
  switch (action.type) {
    case sidenav.CLOSE_SIDENAV:
      return {
        showSidenav: false
      };

    case sidenav.OPEN_SIDENAV:
      return {
        showSidenav: true
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;


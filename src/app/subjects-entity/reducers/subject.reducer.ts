import * as subjects from '../actions/subjects.actions';
import { Subject } from '../models/subject-model';


export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Array<Subject>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  entities: []
};

export function reducer(state = initialState, action: subjects.Actions): State {
  switch (action.type) {
    case subjects.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case subjects.LOAD_SUCCESS: {
      const subjects = action.payload;

      return {
        loaded: true,
        loading: false,
        entities: [...subjects]
      };
    }

    case subjects.LOAD_FAIL: {
      return {
        loaded: false,
        loading: false,
        entities: []
      };
    }    

    default: {
      return state;
    }
  }

}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getEntities = (state: State) => state && state.entities;




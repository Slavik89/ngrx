import * as students from '../actions/studentsActions';
import {Student} from '../../students-entity/models/student-model';


export interface State {
  loaded: boolean;
  loading: boolean;
  entities: Array<Student>;
}

const initialState: State = {
  loaded: false,
  loading: false,
  entities: []
};

export function reducer(state = initialState, action: students.Actions): State {
  switch (action.type) {
    case students.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case students.LOAD_SUCCESS: {
      const students = action.payload;

      return {
        loaded: true,
        loading: false,
        entities: [...students]
      };
    }

    case students.ADD_STUDENT: {
      const student = action.payload;
      const shouldAddStudent = state.entities.every(entity => entity.id !== student.id);

      if (!shouldAddStudent) {
        return state;
      }

      return Object.assign({}, state, {
        entities: [...state.entities, student]
      });
    }

    case students.REMOVE_STUDENT: {
      const student = action.payload;

      return Object.assign({}, state, {
        entities: state.entities.filter(entity => entity.id !== student.id)
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getEntities = (state: State) => state.entities;

import { Action } from '@ngrx/store';
import { Subject } from '../models/subject-model';

export const GET_SUBJECTS = '[Subject] Get Subjects';
export const LOAD = '[Subject] Load';
export const LOAD_SUCCESS = '[Subject] Load Success';
export const LOAD_FAIL = '[Subject] Load Fail';

export class GetSubjects implements Action {
    readonly type = GET_SUBJECTS;
  }

export class Load implements Action {
    readonly type = LOAD;
  }
  
  export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;
  
    constructor(public payload: Subject[]) { }
  }

export class LoadFail implements Action {
    readonly type = LOAD_FAIL;
  }

export type Actions
  = GetSubjects |
    Load |
    LoadSuccess |
    LoadFail;

import { Action } from '@ngrx/store';

export const OPEN_DETAILS = '[SubjectsTable Component] Open Details';
export const CLOSE_DETAILS = '[SubjectsTable Component] Close Details';

export class OpenDetails implements Action {
  readonly type = OPEN_DETAILS;
}

export class CloseDetails implements Action {
    readonly type = CLOSE_DETAILS;
  }

export type Actions
  = OpenDetails | CloseDetails;

/* import { createAction } from '@ngrx/store';

export const openDetails = createAction('[SubjectsTable Component] Open Details');
export const closeDetails = createAction('[SubjectsTable Component] Close Details'); */



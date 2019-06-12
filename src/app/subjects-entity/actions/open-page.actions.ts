import { Action } from '@ngrx/store';

export const OPEN_PAGE = '[Subjects Component] Open Page';
export const CLOSE_PAGE = '[Subjects Component] Close Page';

export class OpenPage implements Action {
  readonly type = OPEN_PAGE;
}

export class ClosePage implements Action {
    readonly type = CLOSE_PAGE;
  }

export type Actions
  = OpenPage | ClosePage;

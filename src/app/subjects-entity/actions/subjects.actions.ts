import { Action } from '@ngrx/store';
import { Subject } from '../models/subject-model';


export const GET_SUBJECTS = '[Subject] Get Students';

/**
 * Add Subject Actions
 */
export class GetStudents implements Action {
  readonly type = GET_SUBJECTS;
}
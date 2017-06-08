import { Action } from '@ngrx/store';
import {Student} from '../../students-entity/models/student-model';


export const GET_STUDENTS =            '[Student] Get Students';
export const ADD_STUDENT =             '[Student] Add Student';
export const ADD_STUDENT_SUCCESS =     '[Student] Add Student Success';
export const ADD_STUDENT_FAIL =        '[Student] Add Student Fail';
export const REMOVE_STUDENT =          '[Student] Remove Student';
export const REMOVE_STUDENT_SUCCESS =  '[Student] Remove Student Success';
export const REMOVE_STUDENT_FAIL =     '[Student] Remove Student Fail';
export const LOAD =                    '[Student] Load';
export const LOAD_SUCCESS =            '[Student] Load Success';
export const LOAD_FAIL =               '[Student] Load Fail';


/**
 * Add Student Actions
 */
export class AddStudent implements Action {
  readonly type = ADD_STUDENT;

  constructor(public payload: Student) { }
}

/**
 * Add Student Actions
 */
export class GetStudents implements Action {
  readonly type = GET_STUDENTS;
}

export class AddStudentSuccess implements Action {
  readonly type = ADD_STUDENT_SUCCESS;

  constructor(public payload: Student) { }
}

export class AddStudentFail implements Action {
  readonly type = ADD_STUDENT_FAIL;

  constructor(public payload: Student) { }
}


/**
 * Remove Student Actions
 */
export class RemoveStudent implements Action {
  readonly type = REMOVE_STUDENT;

  constructor(public payload: Student) { }
}

export class RemoveStudentSuccess implements Action {
  readonly type = REMOVE_STUDENT_SUCCESS;

  constructor(public payload: Student) { }
}

export class RemoveStudentFail implements Action {
  readonly type = REMOVE_STUDENT_FAIL;

  constructor(public payload: Student) {}
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Student[]) { }
}

export class LoadFail implements Action {
  readonly type = LOAD_FAIL;
}


export type Actions
  = AddStudent
  | AddStudentSuccess
  | AddStudentFail
  | RemoveStudent
  | RemoveStudentSuccess
  | RemoveStudentFail
  | Load
  | LoadSuccess
  | LoadFail
  | GetStudents;


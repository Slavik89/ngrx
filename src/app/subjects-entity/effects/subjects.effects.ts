import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { StudentsDataService } from '../../students-entity/services/students-data.service';
import * as student from '../actions/studentsActions';

@Injectable()
export class StudentEffects {

  @Effect()
  getStudents$: Observable<Action> = this.actions$
    .ofType(student.GET_STUDENTS)
    .switchMap(() => {
      return this.studentDataService.fetchStudents()
        .map(students => new student.LoadSuccess(students))
        .catch(() => of(new student.LoadFail()));
    });

  constructor(private actions$: Actions, private studentDataService: StudentsDataService) { }
}

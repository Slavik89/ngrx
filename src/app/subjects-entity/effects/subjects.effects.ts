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

import { SubjectsDataService } from '../services/subjects-data.service';
import * as subject from '../actions/subjects.actions';

@Injectable()
export class SubjectEffects {

  @Effect()
  getSubjects$: Observable<Action> = this.actions$
    .ofType(subject.GET_SUBJECTS)
    .switchMap(() => {
      return this.subjectDataService.fetchSubjects()
        .map(subjects => new subject.LoadSuccess(subjects))
        .catch(() => of(new subject.LoadFail));
    });

  constructor(private actions$: Actions, private subjectDataService: SubjectsDataService) { }
}

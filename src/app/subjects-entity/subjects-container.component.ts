import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from '../subjects-entity/models/subject-model';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../subjects-entity/reducers';
import * as subject from '../subjects-entity/actions/subjects.actions';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-subjects-container',
  templateUrl: './subjects-container.component.html',
  styleUrls: ['./subjects-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsContainerComponent { 

  subjects$: Observable<Subject[]>;

  constructor(store: Store<fromRoot.State>) {
    store.dispatch(new subject.GetSubjects());
    this.subjects$ = store.select(fromRoot.getSubjectEntities).do(data => console.log(data));   
  }  

}

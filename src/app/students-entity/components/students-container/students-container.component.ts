import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromRoot from '../../../store/reducers';
import * as student from '../../../store/actions/studentsActions';
import {Student} from '../../models/student-model';


@Component({
  selector: 'app-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsContainerComponent {

  students$: Observable<Student[]>;

  constructor(store: Store<fromRoot.State>) {
    store.dispatch(new student.GetStudents());
    this.students$ = store.select(fromRoot.getStudentEntities);
  }

}

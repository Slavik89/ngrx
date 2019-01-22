import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentsDataService} from '../../services/students-data.service';
import {Student} from '../../models/student-model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  student$: Observable<Student>;

  constructor(route: ActivatedRoute,
              private studentDataService: StudentsDataService) {
    this.student$ = route.params
      .switchMap(params => this.studentDataService.fetchStudent(params.id))
      .map(student => student[0]);
  }
}

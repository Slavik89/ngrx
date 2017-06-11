import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentsDataService} from '../../services/students-data.service';
import {Student} from "../../models/student-model";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  student: Student;

  constructor(route: ActivatedRoute,
              private studentDataService: StudentsDataService) {
    route.params
      .switchMap(params => this.studentDataService.fetchStudent(params.id))
      .map(student => student[0])
      .subscribe(student => this.student = student);
  }
}

import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student-model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor() { }

  ngOnInit() {
  }

}

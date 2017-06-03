import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/student-model';
import {Observable} from 'rxjs/Observable';
import {StudentsDataService} from '../../services/students-data.service';

@Component({
  selector: 'app-students-container',
  templateUrl: './students-container.component.html',
  styleUrls: ['./students-container.component.scss']
})
export class StudentsContainerComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private dataService: StudentsDataService) { }

  ngOnInit() {
  }

  getStudent() {

  }

}

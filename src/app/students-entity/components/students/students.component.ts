import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../models/student-model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  @Input() students: Student[];
}

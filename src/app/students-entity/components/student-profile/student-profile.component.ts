import {Component, Input} from '@angular/core';
import {Student} from '../../models/student-model';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent {
  @Input() student: Student;

}
